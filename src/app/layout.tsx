import './globals.css'
import "./css/main.css";

import { Inter, Press_Start_2P, Black_Ops_One } from 'next/font/google'

import Navbar from './navbar';
import Footer from './footer';

const inter = Inter({ subsets: ['latin'] })
const black = Black_Ops_One({ subsets: ['latin'], weight: '400' })
const press = Press_Start_2P({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Beamo',
  description: 'Beamo Game Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={press.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}


