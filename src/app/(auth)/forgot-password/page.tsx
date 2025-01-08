import React from 'react';
import Link from 'next/link';

import AuthTemplate from '@/components/AuthTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { ArrowLeft } from 'lucide-react';
import Icon from '@/components/Icon';

const ForgotPassword = () => {
  return (
    <AuthTemplate>
      <form className="flex flex-col gap-4">
        <h1 className="my-3 text-center text-3xl font-semibold text-primary-dark">
          Forgot Password
        </h1>
        <div className="flex flex-col gap-2">
          <Label>Email ID</Label>
          <Input placeholder="Enter Email ID" icon={<Icon iconName="user" />} />
        </div>

        <Button className="w-full rounded-full" asChild>
          <Link href="/" replace>
            Submit
          </Link>
        </Button>
        <div className="my-3 flex justify-center">
          <Link
            href="/login"
            className="flex items-center gap-2 text-gray-500 underline hover:text-primary"
          >
            <ArrowLeft /> Back to Login
          </Link>
        </div>
      </form>
    </AuthTemplate>
  );
};

export default ForgotPassword;
