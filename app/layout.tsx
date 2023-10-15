import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import SessionProvider from './components/SessionProvider';
import NavMenu from './components/NavMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// Next-Auth:  https://www.youtube.com/watch?v=md65iBX5Gxg&t=275

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang='en'>
      <body className={`${inter.className} `}>
        <SessionProvider session={session}>
          <main className='mx-auto max-w-5xl text-2xl flex gap-2'>
            <NavMenu />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}