import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';
import { DataTable } from './table';
import { columns, Payment } from './columns';
import { UserForm } from './form';
import { FormDialog } from '@/components/FormDialog';
import CreateBtn from './CreateBtn';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '728edsdf',
      amount: 200,
      status: 'success',
      email: 'm2@example.com',
    },
    {
      id: '728ed5sdf',
      amount: 300,
      status: 'success',
      email: 'm3@example.com',
    },
  ];
}

const Users = async () => {
  const data = await getData();

  console.log('rendered');

  return (
    <div>
      <div className="title flex items-start justify-between p-1">
        <div className="flex">
          <h1 className="text-base font-semibold uppercase">Users</h1>
        </div>

        <div className="flex items-center justify-end gap-2">
          <Input
            className="h-9 min-w-64 rounded-sm py-2"
            iconPosition="end"
            icon={<Search className="size-5 text-gray-500" />}
            placeholder="Search..."
          />
          <CreateBtn />
        </div>
      </div>

      <DataTable data={data} columns={columns} />

      <FormDialog>
        <UserForm />
      </FormDialog>
    </div>
  );
};

export default Users;
