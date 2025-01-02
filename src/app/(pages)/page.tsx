'use client';

import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';

export default function Home() {
    const { toggleSidebar } = useSidebar();

    return (
        <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <h1 className="bg-indigo-600">Hello World!</h1>
            <Button onClick={toggleSidebar}>Click me</Button>
        </div>
    );
}
