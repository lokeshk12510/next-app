'use client';

import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/Icon';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/dashboard');
  };

  return (
    <form className="flex flex-col gap-4">
      <h1 className="my-3 text-center text-3xl font-semibold text-primary-dark">Admin Portal</h1>
      <div className="flex flex-col gap-2">
        <Label>Email ID</Label>
        <Input placeholder="Enter Email ID" icon={<Icon iconName="user" />} />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Password</Label>
        <Input type="password" placeholder="Enter Password" icon={<Icon iconName="password" />} />
      </div>
      <div className="my-3 flex justify-end">
        <Link href="/forgot-password" className="text-gray-500 underline hover:text-primary">
          Forget Password?
        </Link>
      </div>
      <Button className="w-full rounded-full" type="button" onClick={handleLogin}>
        Login
      </Button>
    </form>
  );
};

export default Login;
