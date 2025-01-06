import '@/styles/globalStyles.css';

import Head from 'next/head';
import { ThemeProvider } from '@/components/ThemeProvider';

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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
