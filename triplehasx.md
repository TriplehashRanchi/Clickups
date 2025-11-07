
# IMS Technical Implementation Guide

This document provides granular, developer-centric guidance for implementing the Internal Management System (IMS) using Next.js and Supabase. It builds on the previous design documents and includes SQL definitions, row-level security policies, code snippets and project structure recommendations.

## 1. Prerequisites and Setup

1.  Create a Supabase project and note your `anon` and `service_role` keys. Use the Supabase CLI (`npm install -g supabase`) for managing migrations.
2.  Install dependencies in your Next.js project:
    ```bash
    npm install @supabase/supabase-js @supabase/auth-helpers-nextjs @supabase/auth-helpers-react
    npm install @tanstack/react-query zod uuid
    ```
3.  Environment variables (e.g., `.env.local`) should include:
    ```
    NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
    SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
    ```
4.  Initialize Supabase in your project (e.g., `lib/supabaseClient.ts`):
    ```typescript
    import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
    export const supabase = createBrowserSupabaseClient()
    ```

## 2. SQL Table Definitions

The following SQL snippets can be applied via the Supabase SQL Editor or migrations. Each table is created in the `public` schema with `uuid` primary keys and `created_at` timestamps. Enable RLS on each table to enforce security [1].

### 2.1 Organizations and Spaces

```sql
-- Organizations
create table public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);

-- Spaces
create table public.spaces (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references public.organizations(id) on delete cascade,
  name text not null,
  description text,
  created_by uuid references auth.users(id),
  settings jsonb,
  created_at timestamptz not null default now()
);
alter table public.spaces enable row level security;
```

### 2.2 Users and Profiles

```sql
create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text not null,
  role text not null check (role in ('admin','manager','employee')),
  manager_id uuid references public.users(id),
  status text not null default 'active',
  created_at timestamptz not null default now()
);
alter table public.users enable row level security;

create table public.user_profiles (
  user_id uuid primary key references public.users(id) on delete cascade,
  phone text,
  address text,
  pan_number text,
  aadhar_number text,
  documents jsonb,
  hire_date date,
  termination_date date,
  created_at timestamptz not null default now()
);
alter table public.user_profiles enable row level security;

create table public.client_links (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  token text unique not null,
  expires_at timestamptz,
  created_at timestamptz not null default now()
);
alter table public.client_links enable row level security;
```

### 2.3 Projects and Billing

```sql
create table public.projects (
  id uuid primary key default gen_random_uuid(),
  space_id uuid references public.spaces(id) on delete cascade,
  client_name text,
  client_company text,
  status text not null default 'new',
  start_date date,
  end_date date,
  budget numeric(12,2),
  description text,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);
alter table public.projects enable row level security;

create table public.project_settings (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) unique on delete cascade,
  custom_fields jsonb,
  statuses text[],
  created_at timestamptz not null default now()
);
alter table public.project_settings enable row level security;

create table public.invoices (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  invoice_number text not null,
  amount numeric(12,2) not null,
  status text not null check (status in ('unpaid','paid','overdue')),
  issued_at date not null,
  due_date date,
  file_url text,
  created_at timestamptz not null default now()
);
alter table public.invoices enable row level security;
```

### 2.4 Tasks, Subtasks and Dependencies

```sql
create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  title text not null,
  description text,
  status text not null,
  priority text,
  due_date date,
  recurrence jsonb,
  time_estimate interval,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.tasks enable row level security;

create table public.task_dependencies (
  task_id uuid references public.tasks(id) on delete cascade,
  depends_on uuid references public.tasks(id) on delete cascade,
  primary key (task_id, depends_on)
);
alter table public.task_dependencies enable row level security;

create table public.subtasks (
  id uuid primary key default gen_random_uuid(),
  task_id uuid references public.tasks(id) on delete cascade,
  title text not null,
  description text,
  status text not null,
  due_date date,
  created_at timestamptz not null default now()
);
alter table public.subtasks enable row level security;

create table public.task_assignees (
  task_id uuid references public.tasks(id) on delete cascade,
  user_id uuid references public.users(id) on delete cascade,
  primary key (task_id, user_id)
);
alter table public.task_assignees enable row level security;
```

### 2.5 Comments, Activity and Notifications

```sql
create table public.comments (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  task_id uuid references public.tasks(id) on delete cascade,
  user_id uuid references auth.users(id),
  client_name text,
  source text not null default 'ims',
  content text not null,
  file_url text,
  created_at timestamptz not null default now()
);
alter table public.comments enable row level security;

create table public.activity_logs (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  task_id uuid references public.tasks(id) on delete cascade,
  user_id uuid references auth.users(id),
  event_type text not null,
  description text not null,
  created_at timestamptz not null default now()
);
alter table public.activity_logs enable row level security;

create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  recipient_id uuid references public.users(id) on delete cascade,
  type text not null,
  reference_type text not null,
  reference_id uuid not null,
  message text not null,
  read boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.notifications enable row level security;

create table public.documents (
  id uuid primary key default gen_random_uuid(),
  owner_type text not null,
  owner_id uuid not null,
  file_name text not null,
  file_url text not null,
  mime_type text not null,
  size integer not null,
  uploaded_by uuid references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.documents enable row level security;```

## 3. Row-Level Security Policies

RLS must be enabled on every exposed table [1]. Below are example policies; you can refine them to match your exact rules.

### 3.1 Users Table

```sql
-- Allow admins and managers to view all users
create policy "Users view (admin/manager)" on public.users
for select to authenticated
using (
  auth.role() = 'admin' or auth.role() = 'manager'
);

-- Allow users to view their own record
create policy "Users view own" on public.users
for select to authenticated
using (
  auth.uid() = id
);

-- Allow insert and update only by service_role (server) or admin
create policy "Users modify (admin)" on public.users
for all to authenticated
using (
  auth.role() = 'admin'
) with check (
  auth.role() = 'admin'
);
```

### 3.2 Tasks Table

```sql
-- Select tasks if user is assigned or is admin/manager
create policy "Tasks view assigned" on public.tasks
for select to authenticated
using (
  auth.role() in ('admin','manager')
  or exists (
    select 1 from public.task_assignees ta where ta.task_id = id and ta.user_id = auth.uid()
  )
);

-- Insert tasks: only authenticated users assigned to project or admins/managers
create policy "Tasks insert" on public.tasks
for insert to authenticated
with check (
  auth.role() in ('admin','manager')
  or exists (
    select 1 from public.projects p
    join public.spaces s on p.space_id = s.id
    where p.id = project_id
      and exists (
        select 1 from public.tasks t
        join public.task_assignees ta on ta.task_id = t.id
        where t.project_id = p.id and ta.user_id = auth.uid()
      )
  )
);
```

### 3.3 Comments Table

```sql
-- Users can see comments on projects they can access
create policy "Comments select" on public.comments
for select to authenticated
using (
  auth.role() in ('admin','manager')
  or exists (
    select 1 from public.tasks t
    join public.task_assignees ta on ta.task_id = t.id
    where t.project_id = public.comments.project_id and ta.user_id = auth.uid()
  )
);

-- Users can insert comments on projects they can access
create policy "Comments insert" on public.comments
for insert to authenticated
with check (
  auth.role() in ('admin','manager')
  or exists (
    select 1 from public.tasks t
    join public.task_assignees ta on ta.task_id = t.id
    where t.project_id = project_id and ta.user_id = auth.uid()
  )
);
```

### 3.4 Client Access

Client links are not authenticated via Supabase Auth; instead, you create an API route to validate the token and then impersonate a special Postgres role. For example, define a Postgres role `client_viewer` with limited privileges and use [Supabase Edge functions] to set `request.jwt` claims accordingly.

## 4. Next.js Project Structure

A recommended structure for the Next.js codebase:

```
/app
  /dashboard             # Employee/manager/admin UI
    /spaces
    /projects
    /tasks
  /client/[token]        # Client portal route
  /api                   # API routes
    spaces.ts
    projects.ts
    tasks.ts
    comments.ts
    auth.ts
/components              # Reusable components (cards, forms, tables)
/lib
  supabaseClient.ts      # Supabase client initialization
  rls.ts                 # Helper to apply RLS policies on server
  api.ts                 # Helper to call API routes with React Query
/hooks
  useAuth.ts             # Auth state management
  useRealtime.ts         # Subscribe to Realtime channels
/prisma (optional)       # If using Prisma for typed queries
```

### 4.1 Example API Route (TypeScript)

```typescript
// /app/api/projects/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

export async function GET(req: NextRequest) {
  const supabase = createServerSupabaseClient({ req })
  const {
    data: { user },
    error
  } = await supabase.auth.getUser()
  if (error || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  // fetch projects user has access to
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
  return NextResponse.json(projects)
}

export async function POST(req: NextRequest) {
  const supabase = createServerSupabaseClient({ req })
  const {
    data: { user },
    error
  } = await supabase.auth.getUser()
  if (error || !user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const { data, error: insertError } = await supabase
    .from('projects')
    .insert({ ...body, created_by: user.id })
    .select()
    .single()
  if (insertError) return NextResponse.json({ error: insertError.message }, { status: 400 })
  return NextResponse.json(data)
}
```

### 4.2 Realtime Chat Hook

```typescript
// /hooks/useProjectChat.ts
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export function useProjectChat(projectId: string) {
  const [messages, setMessages] = useState<any[]>([])
  useEffect(() => {
    const channel = supabase.channel(`public.project_${projectId}`)
    channel
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'comments',
        filter: `project_id=eq.${projectId}`
      }, (payload) => {
        setMessages((msgs) => [...msgs, payload.new])
      })
      .subscribe()

    // fetch initial messages
    supabase
      .from('comments')
      .select('*')
      .eq('project_id', projectId)
      .then(({ data }) => setMessages(data ?? []))

    return () => {
      supabase.removeChannel(channel)
    }
  }, [projectId])
  return messages
}
```

## 5. Triggers and Functions

Consider triggers to automatically update timestamps and generate notifications.

```sql
-- Update tasks.updated_at on row changes
create or replace function public.update_task_updated_at()
returns trigger as $$
begin
  new.updated_at := now();
  return new;
end;
$$ language plpgsql;

create trigger update_task_updated_at_trigger
before update on public.tasks
for each row execute procedure public.update_task_updated_at();

-- Generate notifications for new assignments
create or replace function public.notify_assignment()
returns trigger as $$
begin
  insert into public.notifications (recipient_id, type, reference_type, reference_id, message)
  select new.user_id, 'assignment', 'task', new.task_id,
         'You have been assigned a new task.';
  return new;
end;
$$ language plpgsql;

create trigger notify_assignment_trigger
after insert on public.task_assignees
for each row execute procedure public.notify_assignment();
```

## 6. Development Workflow

1.  **Plan migrations**: Use Supabase CLI to create migration files (`supabase migration new create_tasks_table`) and commit them to version control.
2.  **RLS testing**: Write integration tests to ensure that unauthorized users cannot access restricted data.
3.  **Seeding**: Create seeds for default spaces, statuses and sample projects.
4.  **Deployment**: Use Vercel or Netlify for Next.js; configure environment variables and deploy your Supabase environment.
5.  **Monitoring**: Enable Supabase logs and Realtime monitoring; integrate Sentry or LogRocket for front-end error reporting.

## 7. Future Flexibility

*   **Dynamic status definitions**: Because statuses are stored in arrays in `project_settings` and `spaces.settings`, you can add new statuses without changing the schema.
*   **Custom fields**: Use JSONB to store arbitrary field definitions; add GIN indexes for queries.
*   **Role expansion**: Add a `roles` table to manage roles and permissions rather than hard-coding role names; modify policies accordingly.
*   **Localization**: Externalize all text labels and date formatting; allow per-user locale preferences.
*   **Scaling chat**: Partition the `comments` table by project ID or use separate Realtime channels per project to avoid broadcast storms.
*   **AI integration**: Store AI prompts and suggestions in separate tables; add a microservice for generating AI responses.

## Conclusion

This guide provides the detailed SQL DDL, example row-level security policies, Next.js project structure, API examples, Realtime hooks and triggers needed to implement the IMS. It builds on Supabase’s strong authentication model (JWT-based sessions) and emphasizes secure data access using Row Level Security [1]. Developers can adapt these examples to fit your exact business logic and scale the system as requirements evolve.

---

[1] Row Level Security | Supabase Docs - https://supabase.com/docs/guides/database/postgres/row-level-security
