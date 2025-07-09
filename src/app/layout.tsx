import type {Metadata} from 'next';
import {Istok_Web, Raleway} from 'next/font/google';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import '../styles/globals.scss';

const geistSans = Istok_Web({
  variable: '--font-title',
  subsets: ['latin'],
  weight: ['400'],
});

const geistMono = Raleway({
  variable: '--font-text',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'ItSoftVision',
  description: 'Build your business with us',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} $`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
