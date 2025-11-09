'use client'

import Image from "next/image"
import Link from "next/link"
import logoFull from '@/public/assets/logo2.svg'
import Button from "@/components/ui/Button"
import { logout } from "@/lib/actions/auth.actions"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"

const navLinks = [
    {label : "Dashboard", href: "/dashboard"},
    {label : "Portfolio", href: "#"},
    {label : "Discover", href: "#"},
    {label : "FAQs", href: "#faqs"},
]

const getUserInitials = (name: string): string => {
  const parts = name.trim().split(' ')
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts. length - 1][0]).toUpperCase()
  }
  return name.substring(0, 1).toUpperCase()
}

const Navbar = ( {user} : {user?: User }) => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMenuOpen || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen, isMobileMenuOpen])

  const handleLogout = async () => {
    await logout()
    router.push('/')
    router.refresh()
  }

  return <section  className="p-6 w-full bg-black">
    <div className="container max-w-5xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 md:pl-5 items-center">
        <div>
          <Link href={user ? "/" : "/"}>
            <Image src={logoFull} alt="tickr logo" className="h-10  w-auto"/>
          </Link>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <nav className="flex gap-6 font-medium">
            {navLinks.map(link => (
              <Link href={link.href} key={link.label}>{link.label}</Link>
            ))}
          </nav>
        </div>
        <div className="flex justify-end gap-4 items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#C8FF00] transition-colors "
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
          {user ? (
            <div className="hidden md:flex items-center gap-3 relative" ref={menuRef}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 rounded-full bg-[#C8FF00] text-black flex items-center justify-center font-semibold text-sm cursor-pointer hover:bg-[#B8EF00] transition-colors"
                aria-label="User menu"
              >
                {getUserInitials(user.name)}
              </button>
              
              {isMenuOpen && (
                <div className="absolute top-12 right-0 w-64 bg-neutral-900 border border-white/15 rounded-lg shadow-lg z-50 overflow-hidden">
                  <div className="p-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#C8FF00] text-black flex items-center justify-center font-semibold text-base">
                        {getUserInitials(user.name)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-white">{user.name}</span>
                        <span className="text-xs text-white/60">{user.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10 rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="secondary" className="hidden md:inline-flex items-center cursor-pointer" >Log In</Button>
              </Link>
              <Link href="/sign-up">
                <Button variant="primary" className="hidden md:inline-flex items-center cursor-pointer" >Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>

    {isMobileMenuOpen && (
      <>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu */}
        <div 
          ref={mobileMenuRef}
          className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-neutral-900 border-l border-white/15 z-50 md:hidden overflow-y-auto transform transition-transform duration-300 ease-in-out"
        >
          <div className="p-6 space-y-6">
            {/* User Details Section */}
            {user ? (
              <div className="pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#C8FF00] text-black flex items-center justify-center font-semibold text-lg">
                    {getUserInitials(user.name)}
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-base font-medium text-white">{user.name}</span>
                    <span className="text-sm text-white/60">{user.email}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="pb-6 border-b border-white/10 space-y-3">
                <Link 
                  href="/sign-in"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <Button variant="secondary" className="w-full">Log In</Button>
                </Link>
                <Link 
                  href="/sign-up"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <Button variant="primary" className="w-full">Sign Up</Button>
                </Link>
              </div>
            )}

            {/* Navigation Links */}
            <nav className="space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Logout Button (if logged in) */}
            {user && (
              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={async () => {
                    setIsMobileMenuOpen(false)
                    await handleLogout()
                  }}
                  className="w-full px-4 py-3 text-left text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  <span className="font-medium">Log Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    )}
  </section>
}

export default Navbar