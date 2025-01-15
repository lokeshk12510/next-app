'use client';

import React, { useLayoutEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import SubHeader from '@/components/SubHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import MapTech from './tabs/mapTech';
import Equipments from './tabs/equipments';
import AssetTypes from './tabs/assetTypes';

const TabConfig = [
  { label: 'Map technicians', value: 'map-technicians' },
  { label: 'Equipments', value: 'equipments' },
  { label: 'Asset Types', value: 'asset-types' },
];

const Asset = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the current tab from the query parameter
  const tab = searchParams.get('tab') || undefined;

  useLayoutEffect(() => {
    if (!tab) router.push(`/management/asset-management?tab=${TabConfig[0].value}`);
  }, [router, tab]);

  const renderTabContent = () => {
    switch (tab) {
      case 'map-technicians':
        return <MapTech />;
      case 'equipments':
        return <Equipments />;
      case 'asset-types':
        return <AssetTypes />;
      default:
        return <></>;
    }
  };

  console.log(tab, 'PAGE');

  return (
    <div>
      <SubHeader title="Asset Management" />
      <Tabs value={tab}>
        <TabsList>
          {TabConfig.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value} asChild>
              <Link href={`/management/asset-management?tab=${tab.value}`}>{tab.label}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
        {tab && <TabsContent value={tab}>{renderTabContent()}</TabsContent>}
      </Tabs>
    </div>
  );
};

export default Asset;
