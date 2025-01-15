import React from 'react';

import Image from 'next/image';
import IMAGES from '@/config/images';

const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-dvh w-dvw items-center justify-center bg-white">
      <div className="login-bg absolute left-0 h-full w-1/2 max-md:top-0 max-md:h-1/2 max-md:w-full"></div>

      <div className="grid grid-cols-2 gap-0 max-md:w-9/12 max-md:grid-cols-1 max-sm:w-11/12">
        <div className="login-form-shadow login-image-card-bg relative flex items-center justify-center rounded-xl rounded-r-none p-8 max-lg:p-4 max-md:hidden">
          <Image
            src={IMAGES.LoginImage}
            alt="Thermal scanner login"
            className="size-full h-[35dvw] w-[35dvw] max-lg:min-h-[350px] max-lg:min-w-[350px] xl:max-h-[500px] xl:max-w-[500px]"
            priority
          />

          <div className="absolute left-5 top-5 size-6 rounded-full bg-white"></div>
          <div className="absolute left-11 top-11 size-2 rounded-full bg-white"></div>
        </div>
        <div className="login-form-shadow z-10 flex items-center justify-center rounded-xl rounded-l-none border border-gray-100 bg-white max-lg:h-auto max-md:rounded-l-xl">
          <div className="login-form flex w-full flex-col gap-4 px-12 py-16 max-lg:p-10 max-sm:p-6">
            <div className="flex justify-center">
              <Image
                className="mb-2"
                src={IMAGES.LogoMain}
                alt="Thermal scanner"
                width={260}
                height={120}
              />
            </div>
            {children}
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-200px] right-[-200px] h-[550px] w-[550px] rounded-full bg-primary-light max-lg:bottom-[-150px] max-lg:right-[-150px] max-lg:h-[300px] max-lg:w-[300px]"></div>
    </div>
  );
};

export default AuthTemplate;
