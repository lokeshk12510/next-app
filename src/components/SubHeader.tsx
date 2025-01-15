import React from 'react';

import { SidebarTrigger } from './ui/sidebar';

const SubHeader = ({ title }: { title: string }) => {
  return (
    <div className="sticky top-0 z-10 flex h-16 items-center justify-start gap-4 bg-card px-4 text-primary">
      <SidebarTrigger
        variant={'outline'}
        size="icon"
        className="h-9 w-9 bg-primary-light hover:bg-primary hover:text-primary-foreground [&_svg]:size-6"
      />
      <h1 className="text-xl font-medium uppercase">{title}</h1>
    </div>
  );
};

export default SubHeader;
