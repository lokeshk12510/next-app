'use client';

import SkeletonLoader from '@/components/Skeleton-loader';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Protected = ({ children }: { children: React.ReactNode }) => {
  const [loader, setLoader] = React.useState(true);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      router.push('/dashboard');
    }, 2000);
  }, [router]);

  if (loader) {
    return <SkeletonLoader />;
  }

  return <div>{children}</div>;
};

export default Protected;
