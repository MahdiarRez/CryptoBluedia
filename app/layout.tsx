import type { Metadata } from 'next';
import './global.css';
import Navbar from '@/app/components/navbar';

export const metadata: Metadata = {
  title: {
    template: 'Bluedia | %s',
    default: 'Crypto Bluedia',
  },
  description: 'Bluedia,Crypto currency news',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
