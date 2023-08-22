import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import TopNavBar from './components/topnavbar'
import BottomNavbar from './components/bottomnavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Meet Up App',
  description: 'Meet Up platform for users interested in engaging in their community',
}

export default function RootLayout({ children }) {
  return (
    <>
      <TopNavBar/>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
      <BottomNavbar/>
    </>
  )
}
