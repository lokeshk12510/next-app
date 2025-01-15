'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

import SubHeader from '@/components/SubHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import URLS from '@/config/urls';
import { FormDialogProvider } from '@/components/FormDialog';

const userMgt = URLS.management.userManagement;

const TabConfig = [
  { label: 'Users', value: userMgt.users },
  { label: 'Clients', value: userMgt.clients },
  { label: 'States', value: userMgt.states },
  { label: 'Roles', value: userMgt.roles },
];

const UserManagementLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [tabValue, setTabValue] = useState<string | undefined>();

  useEffect(() => {
    if (pathname !== userMgt.root) {
      setTabValue(pathname);
    }

    if (pathname === userMgt.root) {
      router.replace(TabConfig[0].value);
    }
  }, [pathname, router]);

  return (
    <div>
      <SubHeader title="User Management" />
      <Tabs value={tabValue}>
        <TabsList>
          {TabConfig.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value} asChild>
              <Link href={tab.value}>{tab.label}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
        {tabValue && (
          <TabsContent value={tabValue}>
            <FormDialogProvider>{children}</FormDialogProvider>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default UserManagementLayout;
