import Navbar from '@/components/sections/Navbar'
import { auth } from '@/lib/better-auth/auth'
import { headers } from 'next/headers'
import React from 'react'

const Layout = async ({ children } : {children : React.ReactNode}) => {
  const session = await auth.api.getSession({ headers : await headers() });

  // Make user optional - landing page is public
  const user = session?.user ? {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
  } : undefined;

  return (
    <main>
      <Navbar user={user}/>
      <div>
        {children}
      </div>
    </main>
  )
}

export default Layout