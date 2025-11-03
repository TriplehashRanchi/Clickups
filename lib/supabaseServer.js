import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const supabaseServer = () => {
  const cookieStore = cookies();
  return createPagesServerClient({ cookies: () => cookieStore });
};
