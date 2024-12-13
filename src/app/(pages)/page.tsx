"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export default function Home() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className=" bg-indigo-600">Hello World!</h1>
      <Button onClick={toggleSidebar}>Click me</Button>
    </div>
  );
}
