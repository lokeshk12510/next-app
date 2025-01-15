import { cookies } from 'next/headers';

import Header from '@/components/Header';
import AuthChecker from '@/components/AuthChecker';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';

  return (
    <AuthChecker>
      <Header />
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <div className="h-[calc(100vh-64px)] w-full overflow-y-auto">{children}</div>
      </SidebarProvider>
    </AuthChecker>
  );
}
