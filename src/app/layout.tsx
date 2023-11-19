import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Bootstrap from '@/components/Bootstrap';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });
export const revalidate = 0;
export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'App Made by Al-Nahian Pulok',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>
        <NavBar />
        <main className="container py-2">
          {children}
        </main>
        <Bootstrap />
      </body>
    </html>
  );
}
