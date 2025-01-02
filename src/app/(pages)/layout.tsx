import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import Head from 'next/head';
import { cookies } from 'next/headers';
import '../../styles/globalStyles.css';

// /app/(pages)/layout.tsx
export const metadata = {
    title: 'My App',
    description: 'An amazing application built with Next.js',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';

    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <SidebarProvider defaultOpen={defaultOpen}>
                    <AppSidebar />
                    <main>
                        <SidebarTrigger />
                        {children}
                    </main>
                </SidebarProvider>
            </body>
        </html>
    );
}
