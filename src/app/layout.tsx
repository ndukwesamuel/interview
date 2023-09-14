"use client"
import './globals.css'

import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#04010E] text-white">

        {/* <Navbar /> */}
        {children}
        <Footer />

      </body>
    </html >
  )
}




