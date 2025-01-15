'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';
export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <h1>ADMIN ERROR</h1>
      {error.message} <button onClick={() => startTransition(reload)}>Try again</button>
    </div>
  );
}
