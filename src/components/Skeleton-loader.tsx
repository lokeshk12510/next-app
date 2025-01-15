'use client';

import React from 'react';

import { Skeleton } from './ui/skeleton';
import { Progress } from './ui/progress';

const SkeletonLoader = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(60), 500);
    const timer2 = setTimeout(() => setProgress(100), 1800);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <main className="p-2">
      <Skeleton className="h-[60px] w-full rounded-lg bg-white" />
      <div className="my-2 flex h-screen w-screen gap-2">
        <Skeleton className="h-full w-[320px] rounded-lg">
          <div className="my-2 flex flex-col items-center justify-between gap-4 p-3">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-[50px] w-full rounded-lg bg-primary-light" />
            ))}
          </div>
        </Skeleton>
        <div className="flex w-full flex-col gap-2">
          <Skeleton className="h-[50px] w-full rounded-lg bg-white" />
          <Skeleton className="flex h-full w-full items-center justify-center rounded-lg bg-white">
            <Progress value={progress} className="w-[200px]" />
          </Skeleton>
        </div>
      </div>
    </main>
  );
};

export default SkeletonLoader;
