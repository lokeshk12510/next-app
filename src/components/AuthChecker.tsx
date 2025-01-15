'use client';

import React, { useEffect } from 'react';

import SkeletonLoader from '@/components/Skeleton-loader';

const AuthChecker = ({ children }: { children: React.ReactNode }) => {
  const [loader, setLoader] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  if (loader) {
    return <SkeletonLoader />;
  }

  return <div>{children}</div>;
};

export default AuthChecker;
