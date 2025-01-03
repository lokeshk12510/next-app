import Head from 'next/head';
import '@/styles/globalStyles.css';

// /app/layout.tsx
export const metadata = {
  title: 'My App',
  description: 'An amazing application built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
