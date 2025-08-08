"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, User, Phone, Network, Layers } from "lucide-react"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className={`w-full transition-all duration-500 ${
        isScrolled 
          ? 'flex justify-center pt-6' 
          : 'backdrop-blur-md'
      }`}>
        <div className={`transition-all duration-500 ${
          isScrolled 
            ? 'w-full max-w-4xl mx-6 rounded-full bg-black/20 backdrop-blur-md shadow-2xl' 
            : 'max-w-screen-2xl mx-auto'
        }`}>
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'px-8 py-4' : 'px-6 py-3'
          }`}>
            
            {/* Left: Logo & Name */}
            <div className="flex items-center gap-3">
              <img
                src="/download.png"
                alt="Logo"
                width={40}
                height={40}
                className={`rounded-full object-cover transition-all duration-500 ${
                  isScrolled ? 'h-8 w-8' : 'h-10 w-10'
                }`}
              />
              <span className={`font-bold text-white tracking-wide transition-all duration-500 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>
                Access Consumetrics
              </span>
            </div>

            {/* Center: Nav Items */}
            <ul className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
              <li className="hover:text-gray-300 transition-all duration-300">
                <a href="/">Services</a>
              </li>
              <li className="hover:text-gray-300 transition-all duration-300">
                <a href="/">Capabilities</a>
              </li>
              <li className="hover:text-gray-300 transition-all duration-300">
                <a href="/">Network</a>
              </li>
            </ul>

            {/* Right: Actions */}
            <div className="hidden md:flex items-center gap-5">
             
              <Button className={`bg-gray-800 hover:bg-gray-700 text-white rounded-full text-sm font-medium shadow-lg transition-all duration-500 ${
                isScrolled ? 'px-4 py-1.5' : 'px-6 py-2'
              }`}>
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-all duration-300">
                    <MenuIcon className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[260px] bg-gray-900 text-white p-6 border-l border-gray-700">
                  <ul className="flex flex-col gap-4 text-gray-200">
                    <li className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                      <Layers className="w-4 h-4" />
                      <a href="/">Services</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                      <User className="w-4 h-4" />
                      <a href="/">Capabilities</a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                      <Network className="w-4 h-4" />
                      <a href="/">Network</a>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <a href="/" className="block text-sm mb-4 hover:text-white transition-colors duration-200">Log in</a>
                    <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Us
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
