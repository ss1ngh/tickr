import type React from 'react'
import Navbar from '@/components/sections/Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='min-h-screen bg-black'>
      <Navbar />
      {children}
    </main>
  )
}

export default Layout