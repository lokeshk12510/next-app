import { AppSidebar } from '@/components/AppSidebar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SidebarProvider } from '@/components/ui/sidebar';
import { cookies } from 'next/headers';
import Protected from './_components/Protected';
import Header from '@/components/Header';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Protected>
        <Header />
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <div className="h-[calc(100vh-64px)] w-full overflow-y-auto">{children}</div>
        </SidebarProvider>
      </Protected>
    </ThemeProvider>
  );
}
