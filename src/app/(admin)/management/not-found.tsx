'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const Management = () => {
  const router = useRouter();

  router.replace('/management/user-management');

  return <></>;
};

export default Management;
