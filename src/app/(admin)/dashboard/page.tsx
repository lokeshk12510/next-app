import SubHeader from '@/components/SubHeader';
import React from 'react';

const Dashboard = async () => {
  return (
    <div>
      <SubHeader title="Dashboard" />

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-white" />
          <div className="aspect-video rounded-xl bg-white" />
          <div className="aspect-video rounded-xl bg-white" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-white" />
      </div>
    </div>
  );
};

export default Dashboard;
