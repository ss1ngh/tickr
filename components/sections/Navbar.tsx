import Image from "next/image"
import logoFull from '@/public/assets/logo2.svg'
import Button from "@/components/ui/Button"


const navLinks = [
    {label : "Portfolio", href: "#"},
    {label : "Watchlist", href: "#watchlist"},
    {label : "Discover", href: "#"},
    {label : "FAQs", href: "#faqs"},
]
const Navbar = () => {
  return <section  className="p-6 w-full">
    <div className="container max-w-5xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 md:pl-5 items-center">
        <div>
          <Image src={logoFull} alt="tickr logo" className="h-10  w-auto"/>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <nav className="flex gap-6 font-medium">
            {navLinks.map(link => (
              <a href={link.href} key={link.label}>{link.label}</a>
            ))}
          </nav>
        </div>
        <div className="flex justify-end gap-4">
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
            className="feather feather-menu md:hidden"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <Button variant="secondary" className="hidden md:inline-flex items-center" >Log In</Button>
          <Button variant="primary" className="hidden md:inline-flex items-center" >Sign Up</Button>
        </div>
      </div>
    </div>
  </section>
}

export default Navbar