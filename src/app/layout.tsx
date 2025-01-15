import '@/styles/globalStyles.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Page Title',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
