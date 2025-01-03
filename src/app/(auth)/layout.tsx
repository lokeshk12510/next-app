import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>AUTHENTICATE</h2>
      {children}
    </div>
  );
};

export default AuthLayout;
