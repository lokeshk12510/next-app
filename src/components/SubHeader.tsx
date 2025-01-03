import React from 'react';
import { SidebarTrigger } from './ui/sidebar';

const SubHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex h-14 items-center justify-start gap-5 border-b border-gray-200 bg-white px-4 text-primary sticky top-0 z-10">
      <SidebarTrigger
        variant={'outline'}
        size="icon"
        className="bg-primary-light h-9 w-9 hover:bg-primary hover:text-primary-foreground [&_svg]:size-6"
      />
      <h1 className="text-xl font-medium uppercase">{title}</h1>
    </div>
  );
};

export default SubHeader;
