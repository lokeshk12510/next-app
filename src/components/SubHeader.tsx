'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { SidebarTrigger } from './ui/sidebar';
import { Separator } from './ui/separator';
import Icon from './Icon';

import ICONS from '@/config/icons';
import URLS from '@/config/urls';

const IconConfig: { [x: string]: keyof typeof ICONS } = {
  [URLS.dashboard]: 'dashboard',
  [URLS.management.root]: 'management',
  [URLS.scheduler]: 'scheduler',
  [URLS.reports.root]: 'reports',
  [URLS.generateReport]: 'generateReport',
  [URLS.reportHistory]: 'reportHistory',
};

const SubHeader = ({ title }: { title: string }) => {
  const pathname = usePathname();

  const path = pathname.split('/')[1];

  const getIconName = () => {
    return IconConfig[`/${path}`];
  };

  return (
    <div className="sticky top-0 z-10 flex h-16 items-center justify-start gap-4 bg-card px-4 text-primary">
      <SidebarTrigger
        variant={'outline'}
        size="icon"
        className="h-9 w-9 border-none bg-transparent hover:bg-primary-light hover:text-primary [&_svg]:size-6"
      />
      <Separator orientation="vertical" className="h-7" />
      <div className="flex items-center justify-start gap-2">
        <Icon iconName={getIconName()} />
        <h1 className="text-xl font-medium uppercase">{title}</h1>
      </div>
    </div>
  );
};

export default SubHeader;
