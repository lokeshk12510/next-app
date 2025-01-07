import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import IMAGES from '@/config/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div className="flex h-screen w-screen items-stretch justify-center">
      <div className="right login-bg login-form-shadow flex h-full flex-1 items-center justify-end">
        <div className="login-form-shadow login-image-card-bg flex h-[calc(70%-4rem)] w-[calc(60dvh-4rem)] items-center justify-center rounded-xl rounded-r-none">
          <Image
            src={IMAGES.LoginImage}
            alt="Thermal scanner login"
            className="size-full max-h-[500px] max-w-[500px]"
            priority
          />
        </div>
      </div>
      <div className="left flex h-full flex-1 items-center justify-start bg-white">
        <div className="login-form-shadow flex h-[calc(70%-4rem)] w-[calc(60dvh-4rem)] items-center justify-center rounded-xl rounded-l-none border border-gray-100">
          <div className="login-form flex w-full flex-col gap-4 p-16">
            <div className="flex justify-center">
              <Image
                className="mb-2"
                src={IMAGES.LogoMain}
                alt="Thermal scanner"
                width={260}
                height={120}
              />
            </div>
            <h1 className="my-3 text-center text-3xl font-semibold text-primary-dark">
              Admin Portal
            </h1>
            <div className="flex flex-col gap-2">
              <Label>Email ID</Label>
              <Input placeholder="Enter Email ID" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Password</Label>
              <Input type="password" placeholder="Enter Password" />
            </div>
            <div className="my-3 flex justify-end">
              <Link href="/forgot-password" className="text-gray-500 underline">
                Forget Password?
              </Link>
            </div>
            <Button className="h-11 w-full rounded-full">LOGIN</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
