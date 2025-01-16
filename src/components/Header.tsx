import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import IMAGES from '@/config/images';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import Icon from './Icon';

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between border-b border-border bg-card px-4 text-primary">
      <div>
        <Image width={115} height={40} src={IMAGES.Logo} alt="logo" priority />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-md p-1.5 hover:bg-gray-100 data-[state=open]:bg-gray-100">
          <div className="flex items-center gap-2">
            <Icon iconName="profile" className="size-10" />
            <div className="flex flex-col items-start">
              <p className="text-base font-medium">DAVID CROTTY</p>
              <p className="text-[12px]">ADMIN</p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-3 w-96 rounded-lg">
          <div className="header-gradient flex items-center justify-start gap-4 p-3">
            <div className="flex size-14 items-center justify-center rounded-full border border-primary">
              <p className="text-2xl text-primary">DC</p>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-base font-medium">DAVID CROTTY</p>
              <p className="text-[12px] text-primary">ADMIN</p>
            </div>
          </div>
          <DropdownMenuSeparator className="bg-secondary" />

          <div className="p-3">
            <p className="mb-3 text-base font-semibold text-gray-300">PROFILE DETAILS</p>

            <div className="flex flex-col gap-3">
              <div>
                <p className="text-sm font-medium text-gray-400">First Name</p>
                <p className="text-base text-gray-700">David</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-400">Last Name</p>
                <p className="text-base text-gray-700">Crotty</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-400">Email Id</p>
                <p className="text-base text-gray-700">david.crotty@gmail.com</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-400">Phone Numver</p>
                <p className="text-base text-gray-700">+61 0434 545 454</p>
              </div>
              <DropdownMenuItem asChild>
                <Button className="mt-2 h-10 w-full cursor-pointer" asChild>
                  <Link href="/">Sign out</Link>
                </Button>
              </DropdownMenuItem>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header;
