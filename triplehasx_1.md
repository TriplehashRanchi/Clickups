
# Extended System Design Document – Internal Management System (IMS)

## 1. Architectural Overview (Recap)

The IMS is built as a Next.js 15 frontend that communicates with Supabase services. Key components are similar to those described in the earlier design:

1.  **Next.js Client** – Serves views for employees, managers, admins and client portals. Uses the Supabase JS SDK for authentication (sign-in, session management) and Realtime subscriptions. The client library automatically includes the user’s JWT on all database requests.
2.  **API Layer (Next.js API routes or tRPC)** – Encapsulates server-side logic. It calls Supabase’s PostgREST endpoints or invokes RPC functions and can apply extra business validations. API handlers retrieve the user session via `supabase.auth.getSession()`; if no session exists, they return a 401.
3.  **Supabase Backend** – Provides:
    *   PostgreSQL database with custom schemas described in Section 3.
    *   Supabase Auth (manages sessions using JWTs).
    *   Supabase Storage for files.
    *   Supabase Realtime channels for chat and activity feeds. [1]
    *   Edge Functions for secure server-side tasks (e.g., generating secure client links, custom triggers).
4.  **Notification Service** – A microservice or serverless function triggered by database changes to send push and email notifications. This can be built with Supabase Functions or external services like AWS Lambda and SendGrid.
5.  **Client Portal** – Renders project data for clients using tokenized URLs. The portal fetches data through API routes that validate the token and expose only the allowed fields.

## 2. Detailed Database Schema

All primary keys use the `uuid` type with `gen_random_uuid()` default. Timestamps are `timestamp with time zone` (`timestamptz`) with `default now()`. Fields marked `nullable` can be `NULL`.

### 2.1 Organizations & Spaces

| Table         | Field           | Type        | Constraints           | Notes                              |
|---------------|-----------------|-------------|-----------------------|------------------------------------|
| organizations | id              | uuid        | PK                    | unique ID for organization         |
|               | name            | text        | not null              | organization name                  |
|               | created_at      | timestamptz | default now()         |                                    |
| spaces        | id              | uuid        | PK                    |                                    |
|               | organization_id | uuid        | FK → organizations.id |                                    |
|               | name            | text        | not null              | space name (e.g., Web Dev)         |
|               | description     | text        | nullable              |                                    |
|               | created_by      | uuid        | FK → users.id         | user who created the space         |
|               | settings        | jsonb       | nullable              | custom space settings (e.g., statuses) |
|               | created_at      | timestamptz | default now()         |                                    |

### 2.2 Users & Profiles

| Table         | Field            | Type        | Constraints                                 | Notes                                        |
|---------------|------------------|-------------|---------------------------------------------|----------------------------------------------|
| users         | id               | uuid        | PK                                          | maps to `auth.users.id`                      |
|               | email            | text        | unique, not null                            |                                              |
|               | full_name        | text        | not null                                    |                                              |
|               | role             | text        | check (role in ('admin','manager','employee')) | defines RBAC role; managers initially have admin-like access |
|               | manager_id       | uuid        | FK → users.id                               | reporting manager; nullable                |
|               | status           | text        | default 'active'                            | 'active'/'inactive'                          |
|               | created_at       | timestamptz | default now()                               |                                              |
| user_profiles | user_id          | uuid        | PK, FK → users.id                           |                                              |
|               | phone            | text        | nullable                                    |                                              |
|               | address          | text        | nullable                                    |                                              |
|               | pan_number       | text        | nullable                                    | encrypted at rest                            |
|               | aadhar_number    | text        | nullable                                    | encrypted at rest                            |
|               | documents        | jsonb       | nullable                                    | JSON array of file URLs                      |
|               | hire_date        | date        | nullable                                    |                                              |
|               | termination_date | date        | nullable                                    |                                              |
|               | created_at       | timestamptz | default now()                               |                                              |
| client_links  | id               | uuid        | PK                                          |                                              |
|               | project_id       | uuid        | FK → projects.id                            |                                              |
|               | token            | text        | unique, not null                            | random string used for client access         |
|               | expires_at       | timestamptz | nullable                                    | expiry timestamp                             |

### 2.3 Projects, Customization & Billing

| Table            | Field          | Type          | Constraints                               | Notes                                          |
|------------------|----------------|---------------|-------------------------------------------|------------------------------------------------|
| projects         | id             | uuid          | PK                                        |                                                |
|                  | space_id       | uuid          | FK → spaces.id                            |                                                |
|                  | client_name    | text          | nullable                                  |                                                |
|                  | client_company | text          | nullable                                  |                                                |
|                  | status         | text          | not null                                  | default 'new'                                  |
|                  | start_date     | date          | nullable                                  |                                                |
|                  | end_date       | date          | nullable                                  |                                                |
|                  | budget         | numeric(12,2) | nullable                                  |                                                |
|                  | description    | text          | nullable                                  |                                                |
|                  | created_by     | uuid          | FK → users.id                             |                                                |
|                  | created_at     | timestamptz   | default now()                             |                                                |
| project_settings | id             | uuid          | PK                                        |                                                |
|                  | project_id     | uuid          | FK → projects.id, unique                  | each project may override space settings       |
|                  | custom_fields  | jsonb         | nullable                                  | JSON array of field descriptors {name,type,options} |
|                  | statuses       | text[]        | nullable                                  | list of valid task statuses for this project   |
| invoices         | id             | uuid          | PK                                        |                                                |
|                  | project_id     | uuid          | FK → projects.id                          |                                                |
|                  | invoice_number | text          | not null                                  |                                                |
|                  | amount         | numeric(12,2) | not null                                  |                                                |
|                  | status         | text          | check (status in ('unpaid','paid','overdue')) |                                                |
|                  | issued_at      | date          | not null                                  |                                                |
|                  | due_date       | date          | nullable                                  |                                                |
|                  | file_url       | text          | nullable                                  | link to invoice document                       |
|                  | created_at     | timestamptz   | default now()                             |                                                |

### 2.4 Tasks, Subtasks & Dependencies

| Table             | Field         | Type        | Constraints                        | Notes                                                                  |
|-------------------|---------------|-------------|------------------------------------|------------------------------------------------------------------------|
| tasks             | id            | uuid        | PK                                 |                                                                        |
|                   | project_id    | uuid        | FK → projects.id                   |                                                                        |
|                   | title         | text        | not null                           |                                                                        |
|                   | description   | text        | nullable                           |                                                                        |
|                   | status        | text        | not null                           | must be one of the statuses defined in `project_settings` or `spaces.settings` |
|                   | priority      | text        | nullable                           | e.g., 'low','medium','high'                                            |
|                   | due_date      | date        | nullable                           |                                                                        |
|                   | recurrence    | jsonb       | nullable                           | e.g., `{frequency:'weekly',interval:1}`                                  |
|                   | time_estimate | interval    | nullable                           | estimated duration                                                     |
|                   | created_by    | uuid        | FK → users.id                      |                                                                        |
|                   | created_at    | timestamptz | default now()                      |                                                                        |
|                   | updated_at    | timestamptz | default now()                      | on update trigger                                                      |
| task_dependencies | task_id       | uuid        | FK → tasks.id, PK composite        |                                                                        |
|                   | depends_on    | uuid        | FK → tasks.id                      | prevents starting `task_id` until `depends_on` is complete             |
| subtasks          | id            | uuid        | PK                                 |                                                                        |
|                   | task_id       | uuid        | FK → tasks.id                      |                                                                        |
|                   | title         | text        | not null                           |                                                                        |
|                   | description   | text        | nullable                           |                                                                        |
|                   | status        | text        | not null                           |                                                                        |
|                   | due_date      | date        | nullable                           |                                                                        |
|                   | created_at    | timestamptz | default now()                      |                                                                        |
| task_assignees    | task_id       | uuid        | FK → tasks.id, composite PK (task_id, user_id) |                                                                        |
|                   | user_id       | uuid        | FK → users.id                      |                                                                        |

### 2.5 Comments & Activity

| Table         | Field          | Type        | Constraints       | Notes                                    |
|---------------|----------------|-------------|-------------------|------------------------------------------|
| comments      | id             | uuid        | PK                |                                          |
|               | project_id     | uuid        | FK → projects.id  |                                          |
|               | task_id        | uuid        | FK → tasks.id     | nullable                                 |
|               | user_id        | uuid        | FK → users.id     | nullable if source is client             |
|               | client_name    | text        | nullable          | stores client name if comment from client |
|               | source         | text        | default 'ims'     | 'ims' or 'client'                        |
|               | content        | text        | not null          | message body                             |
|               | file_url       | text        | nullable          | attachment URL (if any)                  |
|               | created_at     | timestamptz | default now()     |                                          |
| activity_logs | id             | uuid        | PK                |                                          |
|               | project_id     | uuid        | FK → projects.id  |                                          |
|               | task_id        | uuid        | FK → tasks.id     | nullable                                 |
|               | user_id        | uuid        | FK → users.id     | nullable                                 |
|               | event_type     | text        | not null          | e.g., 'task_created','status_changed'    |
|               | description    | text        | not null          | human-readable description               |
|               | created_at     | timestamptz | default now()     |                                          |
| notifications | id             | uuid        | PK                |                                          |
|               | recipient_id   | uuid        | FK → users.id     |                                          |
|               | type           | text        | not null          | e.g., 'assignment','due_date','comment'  |
|               | reference_type | text        | not null          | 'task','project','comment'               |
|               | reference_id   | uuid        | not null          | ID of the entity referenced              |
|               | message        | text        | not null          | display text                             |
|               | read           | boolean     | default false     |                                          |
|               | created_at     | timestamptz | default now()     |                                          |

### 2.6 Documents & Storage

| Table     | Field       | Type        | Constraints     | Notes                                       |
|-----------|-------------|-------------|-----------------|---------------------------------------------|
| documents | id          | uuid        | PK              |                                             |
|           | owner_type  | text        | not null        | 'project','task','subtask','user','invoice' |
|           | owner_id    | uuid        | not null        | points to ID in corresponding table         |
|           | file_name   | text        | not null        | original file name                          |
|           | file_url    | text        | not null        | storage URL in Supabase bucket              |
|           | mime_type   | text        | not null        |                                             |
|           | size        | integer     | not null        | file size in bytes                          |
|           | uploaded_by | uuid        | FK → users.id   |                                             |
|           | created_at  | timestamptz | default now()   |                                             |

## 3. Row Level Security & Access Policies

Supabase Auth uses JWTs and attaches the user’s identity to each request. RLS policies enforce access:

1.  **Organizations & Spaces**: A user can select spaces if they are an admin/manager or if they are assigned to a project within the space.
2.  **Projects**: A user can read a project if they are an admin/manager or if they are assigned to any task within that project. Only admins/managers and project creators can update projects.
3.  **Tasks & Subtasks**: A user can select tasks they are assigned to; managers and admins can select all. Updates are restricted to assignees and managers.
4.  **Comments**: A user can insert a comment if they are assigned to the project or have a client token; clients insert comments with `user_id` null and `client_name` set. Users can only see comments for projects they can access.
5.  **Documents**: A user can select a document if they can select the owner record. Only the uploader or an admin/manager can delete documents.
6.  **Invoices & Billing**: Only admins and managers can read or update invoices. Employees do not have access.

## 4. API Structure

Although Supabase provides a REST API automatically via PostgREST, a custom API layer is recommended to encapsulate business logic, validation and role checks. Example endpoints (path relative to `/api`):

### 4.1 Authentication

Supabase Auth is used for sign-up, login and session management; no custom endpoints required. The client calls `supabase.auth.signUp()` and `supabase.auth.signInWithPassword()`. Sessions are maintained automatically via local storage and cookies. Server-side API routes use `const { data: { session } } = await supabase.auth.getSession()` to access the logged-in user.

### 4.2 Spaces

| Method | Endpoint      | Description                                                              |
|--------|---------------|--------------------------------------------------------------------------|
| GET    | `/spaces`     | Returns list of spaces accessible to the user. Filters by assignments and user role. |
| POST   | `/spaces`     | Creates a new space (admin/manager only). Requires `{ name, description }`. |
| GET    | `/spaces/:id` | Returns details of a space.                                              |
| PUT    | `/spaces/:id` | Updates a space’s details or settings.                                   |
| DELETE | `/spaces/:id` | Deletes a space (admin only).                                            |

### 4.3 Projects

| Method | Endpoint                 | Description                                                                          |
|--------|--------------------------|--------------------------------------------------------------------------------------|
| GET    | `/projects?space_id=`    | List projects within a space, filtered by access rights.                             |
| POST   | `/projects`              | Create a new project. Body includes `space_id`, `client_name`, `status`, `description`, `start_date`, `end_date`, `budget`. |
| GET    | `/projects/:id`          | Retrieve project details with tasks, comments (paginated), documents and invoices.   |
| PUT    | `/projects/:id`          | Update project details (admin/manager only).                                         |
| DELETE | `/projects/:id`          | Archive or delete a project. Typically soft delete (set status to 'archived').     |
| POST   | `/projects/:id/settings` | Set custom fields and statuses for a project.                                        |

### 4.4 Tasks & Subtasks

| Method | Endpoint                       | Description                                                                               |
|--------|--------------------------------|-------------------------------------------------------------------------------------------|
| GET    | `/projects/:project_id/tasks`  | List tasks for a project. Supports query params for `status`, `assignee`.                   |
| POST   | `/projects/:project_id/tasks`  | Create a new task with `title`, `description`, `due_date`, `status`, `priority`, `assignees`, `time_estimate`, `recurrence`. |
| GET    | `/tasks/:id`                   | Get task details, subtasks, comments and attachments.                                     |
| PUT    | `/tasks/:id`                   | Update task fields, including status and due date. Only assignees, managers or admins can update. |
| POST   | `/tasks/:task_id/subtasks`     | Create a subtask with `title`, `description`, `status`, `due_date`.                          |
| PUT    | `/subtasks/:id`                | Update a subtask.                                                                         |
| DELETE | `/subtasks/:id`                | Delete a subtask.                                                                         |
| POST   | `/tasks/:task_id/assign`       | Assign users to a task. Body: `{ user_ids: [] }`.                                         |
| POST   | `/tasks/:task_id/dependencies` | Add a dependency. Body: `{ depends_on: task_id }`.                                        |

### 4.5 Comments & Chat

| Method | Endpoint                        | Description                                                                                                    |
|--------|---------------------------------|----------------------------------------------------------------------------------------------------------------|
| GET    | `/projects/:project_id/comments`| List comments for a project or task. Query params: `task_id`, `page`, `limit`.                                   |
| POST   | `/projects/:project_id/comments`| Create a comment. Body: `{ task_id, content, file }`. If file is present, the API uploads it to Supabase Storage and stores the URL in `file_url`. |
| GET    | `/comments/:id`                 | Retrieve a single comment.                                                                                     |
| DELETE | `/comments/:id`                 | Delete a comment (author or admin only).                                                                       |

### 4.6 Documents

| Method | Endpoint      | Description                                                                          |
|--------|---------------|--------------------------------------------------------------------------------------|
| POST   | `/documents`  | Upload a new document. Body includes `owner_type`, `owner_id`, `file`. API uploads to storage and inserts a `documents` record. |
| GET    | `/documents/:id`| Get document metadata and a signed download URL.                                     |
| DELETE | `/documents/:id`| Delete a document (uploader or admin only).                                          |

### 4.7 Invoices & Billing

| Method | Endpoint                        | Description                                                                            |
|--------|---------------------------------|----------------------------------------------------------------------------------------|
| GET    | `/projects/:project_id/invoices`| List invoices for a project (admin/manager only).                                      |
| POST   | `/projects/:project_id/invoices`| Create a new invoice. Body includes `invoice_number`, `amount`, `status`, `issued_at`, `due_date`, `file`. |
| GET    | `/invoices/:id`                 | Get invoice details and file.                                                          |
| PUT    | `/invoices/:id`                 | Update invoice status (mark as paid).                                                  |
| DELETE | `/invoices/:id`                 | Delete an invoice.                                                                     |

## 5. Authentication & Session Handling

*   Supabase Auth issues JWTs for user sessions. When using Supabase SDKs, data requests automatically include the Auth token.
*   On the client side, `supabase.auth.onAuthStateChange()` can be used to monitor session changes; tokens are stored in local storage by default.
*   On API routes, use `createServerSupabaseClient()` (when using `@supabase/auth-helpers-nextjs`) to validate sessions.
*   For serverless functions (e.g., edge functions or Next.js API routes), extract the token from the `Authorization` header and call `supabase.auth.getUser()` to retrieve the user identity.

## 6. Notification Implementation

*   Use Postgres triggers to insert rows into the `notifications` table when events occur (e.g., new assignment, comment).
*   A Supabase Edge Function listens for new notifications via Supabase’s `database_changes` channel. When a notification is created, the function sends a push notification and optionally an email.

## 7. Development & Future Flexibility

*   **Modularity**: Each module (spaces, projects, tasks, chat, billing) is isolated; new modules (e.g., AI suggestions) can be added with new tables and API endpoints.
*   **JSONB for Custom Fields**: Use `custom_fields` JSONB on projects/spaces to store arbitrary fields; store configuration definitions (e.g., field name, data type, default value). Index these fields with GIN if needed.
*   **Enumerations**: Task statuses and roles should be controlled in lookup tables or arrays; this allows new statuses to be added without altering the schema.
*   **Row-level security**: Write policies referencing `auth.uid()`; new roles (e.g., lead, HR manager) can be added by adjusting the policy checks.
*   **Versioning**: Soft-delete records by adding `deleted_at` timestamps; maintain history tables if auditing is required.
*   **Scalability**: Monitor row counts and plan to partition large tables (e.g., `comments`, `activity_logs`) by project or date. Use Supabase’s new features (e.g., multi-region) as they become available.

## 8. Conclusion

This extended design document provides a detailed architecture, schema definitions and API structure for the IMS. It leverages Supabase’s built-in capabilities (Auth, Realtime, Storage, Row Level Security) and outlines how to implement custom logic via Next.js API routes. The design is modular and extensible, allowing future additions such as AI features, analytics and mobile clients without major restructuring.

---

[1] Realtime | Supabase Docs - https://supabase.com/docs/guides/realtime
