import React from 'react';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource at Admin</p>

      <Link href="/">Return Home</Link>
    </div>
  );
}
