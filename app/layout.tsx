import type { Metadata } from 'next';
import './global.css';
import ThemeButton from '@/app/components/themeButton';
import React from 'react';
import { Manrope } from 'next/font/google';
import Footer from '@/app/footer';
import { ScrollProgress } from '@/app/components/scrollProgress';
import { Navbar } from './components/navbar/navbar';
import { AuthProvider } from './context/authContext';

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
        <ScrollProgress />
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
        <ThemeButton />
        <Footer />
      </body>
    </html>
  );
}
