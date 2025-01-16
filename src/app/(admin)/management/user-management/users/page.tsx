import React from 'react';
import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { FormDialog } from '@/components/FormDialog';

import { UserForm } from './form';
import CreateBtn from './CreateBtn';
import { DataTableDemo } from './DataTable';

const Users = async () => {
  return (
    <div>
      <div className="title mb-2 flex items-start justify-between p-1">
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

      <DataTableDemo />

      <FormDialog>
        <UserForm />
      </FormDialog>
    </div>
  );
};

export default Users;
