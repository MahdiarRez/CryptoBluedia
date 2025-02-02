import type { Metadata } from 'next';
import './global.css';
import Navbar from '@/app/ui/navbar';
import ThemeButton from '@/app/ui/themeButton';
import React from 'react';
import { Manrope } from 'next/font/google';
import Footer from '@/app/footer';

export const metadata: Metadata = {
  title: {
    template: 'Bluedia | %s',
    default: 'Crypto Bluedia',
  },
  description: 'Bluedia,Crypto currency news',
};

const ManropeFont = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '600', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased relative ${ManropeFont.className} `}>
        <Navbar />
        {children}
        <ThemeButton />
        <Footer />
      </body>
    </html>
  );
}
