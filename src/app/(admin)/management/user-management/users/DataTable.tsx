'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Cell,
  ColumnDef,
  ColumnFiltersState,
  Header,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Button } from '@/components/ui/button';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Icon from '@/components/Icon';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData, TValue> {
    // Your additional properties here
    getHeaderProps?: (
      context: Header<TData, TValue>,
    ) => React.ThHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>;
    getCellProps?: (
      context: Cell<TData, TValue>,
    ) => React.ThHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>;

    minWidth?: number;
  }
}

const data: Users[] = [
  {
    id: 1,
    username: 'Liam Brown',
    emailId: 'liam.brown@example.com',
    mobileNo: 412345678,
    state: 'NSW',
    role: 'Tech',
    status: 'Active',
  },
  {
    id: 2,
    username: 'Charlotte Green',
    emailId: 'charlotte.green@example.com',
    mobileNo: 423456789,
    state: 'VIC',
    role: 'Management',
    status: 'Inactive',
  },
  {
    id: 3,
    username: 'Oliver Smith',
    emailId: 'oliver.smith@example.com',
    mobileNo: 434567890,
    state: 'QLD',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 4,
    username: 'Amelia White',
    emailId: 'amelia.white@example.com',
    mobileNo: 445678901,
    state: 'SA',
    role: 'Technical Analyst',
    status: 'Active',
  },
  {
    id: 5,
    username: 'Noah Williams',
    emailId: 'noah.williams@example.com',
    mobileNo: 456789012,
    state: 'WA',
    role: 'Scheduler',
    status: 'Inactive',
  },
  {
    id: 6,
    username: 'Isla Taylor',
    emailId: 'isla.taylor@example.com',
    mobileNo: 467890123,
    state: 'TAS',
    role: 'Tech',
    status: 'Active',
  },
  {
    id: 7,
    username: 'Jack Harris',
    emailId: 'jack.harris@example.com',
    mobileNo: 478901234,
    state: 'NT',
    role: 'Management',
    status: 'Inactive',
  },
  {
    id: 8,
    username: 'Ava Martin',
    emailId: 'ava.martin@example.com',
    mobileNo: 489012345,
    state: 'ACT',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 9,
    username: 'Henry Jones',
    emailId: 'henry.jones@example.com',
    mobileNo: 490123456,
    state: 'NSW',
    role: 'Technical Analyst',
    status: 'Inactive',
  },
  {
    id: 10,
    username: 'Sophia Lee',
    emailId: 'sophia.lee@example.com',
    mobileNo: 401234567,
    state: 'VIC',
    role: 'Scheduler',
    status: 'Active',
  },
  {
    id: 11,
    username: 'William Brown',
    emailId: 'william.brown@example.com',
    mobileNo: 412345679,
    state: 'QLD',
    role: 'Tech',
    status: 'Active',
  },
  {
    id: 12,
    username: 'Mia Green',
    emailId: 'mia.green@example.com',
    mobileNo: 423456780,
    state: 'SA',
    role: 'Management',
    status: 'Inactive',
  },
  {
    id: 13,
    username: 'James Wilson',
    emailId: 'james.wilson@example.com',
    mobileNo: 434567891,
    state: 'WA',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 14,
    username: 'Emily Davis',
    emailId: 'emily.davis@example.com',
    mobileNo: 445678902,
    state: 'TAS',
    role: 'Technical Analyst',
    status: 'Active',
  },
  {
    id: 15,
    username: 'Alexander Miller',
    emailId: 'alexander.miller@example.com',
    mobileNo: 456789013,
    state: 'NT',
    role: 'Scheduler',
    status: 'Inactive',
  },
  {
    id: 16,
    username: 'Harper Thomas',
    emailId: 'harper.thomas@example.com',
    mobileNo: 467890124,
    state: 'ACT',
    role: 'Tech',
    status: 'Active',
  },
  {
    id: 17,
    username: 'Elijah Garcia',
    emailId: 'elijah.garcia@example.com',
    mobileNo: 478901235,
    state: 'NSW',
    role: 'Management',
    status: 'Inactive',
  },
  {
    id: 18,
    username: 'Isabella Moore',
    emailId: 'isabella.moore@example.com',
    mobileNo: 489012346,
    state: 'VIC',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 19,
    username: 'Lucas Martinez',
    emailId: 'lucas.martinez@example.com',
    mobileNo: 490123457,
    state: 'QLD',
    role: 'Technical Analyst',
    status: 'Inactive',
  },
  {
    id: 20,
    username: 'Evelyn Clark',
    emailId: 'evelyn.clark@example.com',
    mobileNo: 401234568,
    state: 'SA',
    role: 'Scheduler',
    status: 'Active',
  },
];

export type Users = {
  id: number;
  username: string;
  emailId: string;
  mobileNo: number;
  state: string;
  role: string;
  status: 'Active' | 'Inactive';
};

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: 'username',
    header: 'Name',
    cell: ({ row }) => <div>{row.getValue('username')}</div>,
  },
  {
    accessorKey: 'emailId',
    header: 'Email ID',
    cell: ({ row }) => <div className="lowercase">{row.getValue('emailId')}</div>,
  },
  {
    accessorKey: 'mobileNo',
    header: 'Mobile Number',
    cell: ({ row }) => <div>{row.getValue('mobileNo')}</div>,
  },
  {
    accessorKey: 'state',
    header: 'State',
    cell: ({ row }) => <div className="capitalize">{row.getValue('state')}</div>,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => <div className="capitalize">{row.getValue('role')}</div>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <div className="capitalize">{row.getValue('status')}</div>,
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: () => (
      <div className="flex items-center justify-center gap-0.5 [&_button]:h-auto [&_button]:w-auto [&_button]:rounded-full [&_button]:p-1.5">
        <Button size={'icon'} variant={'ghost'}>
          <Icon iconName="lock" className="size-5 text-orange-500" />
        </Button>
        <Button size={'icon'} variant={'ghost'}>
          <Icon iconName="edit" className="size-5 text-primary-dark" />
        </Button>
        <Button size={'icon'} variant={'ghost'}>
          <Icon iconName="trash" className="size-5 text-primary" />
        </Button>
      </div>
    ),
    size: 100,
    meta: {
      getHeaderProps: () => ({ className: 'w-7 bg-gray-50' }),
      getCellProps: () => ({ className: 'bg-gray-50' }),
    },
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const { pageSize, pageIndex } = table.getState().pagination;

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  const metaData = header.column.columnDef.meta;

                  const metaHeaderProps =
                    metaData?.getHeaderProps && typeof metaData.getHeaderProps === 'function'
                      ? metaData.getHeaderProps(header)
                      : metaData?.getHeaderProps;

                  return (
                    <TableHead key={header.id} {...metaHeaderProps}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map(cell => {
                    const metaData = cell.column.columnDef.meta;

                    const metaCellProps =
                      metaData?.getCellProps && typeof metaData.getCellProps === 'function'
                        ? metaData.getCellProps(cell)
                        : metaData?.getCellProps;
                    return (
                      <TableCell key={cell.id} {...metaCellProps}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-sm text-muted-foreground">
          {pageSize * pageIndex + 1}-
          {table.getFilteredRowModel().rows.length > pageSize * (pageIndex + 1)
            ? pageSize * (pageIndex + 1)
            : table.getFilteredRowModel().rows.length}{' '}
          of {table.getFilteredRowModel().rows.length}
        </div>
        <div className="space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
