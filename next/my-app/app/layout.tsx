import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create My Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <header className='bg-cyan-300'>Header...</header>
        {children}
        <Link href='/csr'>CSR</Link>
        <Link href='/about'>ABOUT</Link>
        <footer className='bg-blue-300'>Footer...</footer>
      </body>
    </html>
  );
}
