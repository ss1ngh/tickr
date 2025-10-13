import Navbar from '@/components/sections/Navbar'
import React from 'react'

const Layout = ({ children } : {children : React.ReactNode}) => {
  return (
    <main className='min-h-screen'>
      <Navbar/>
      <div className='container'>
        {children}
      </div>
    </main>
  )
}

export default Layout