"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, User, Phone, Network, Layers } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="w-full backdrop-blur-lg bg-white/10 border-b border-gray-300 shadow-lg">
        <div className="max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between">
          
          {/* Left: Logo & Name */}
          <div className="flex items-center gap-3">
            <img
              src="/download.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-2xl font-bold text-white tracking-wide">
              Access Consumetrics
            </span>
          </div>

          {/* Center: Nav Items */}
          <ul className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
            <li className="flex items-center gap-1 hover:text-gray-300 transition-all">
              <Layers className="w-4 h-4" />
              <a href="/">Services</a>
            </li>
            <li className="flex items-center gap-1 hover:text-gray-300 transition-all">
              <User className="w-4 h-4" />
              <a href="/">Capabilities</a>
            </li>
            <li className="flex items-center gap-1 hover:text-gray-300 transition-all">
              <Network className="w-4 h-4" />
              <a href="/">Network</a>
            </li>
          </ul>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-5">
            <a href="/" className="text-sm text-white hover:text-gray-300 transition-all">
              Log in
            </a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md transition-all">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[260px] bg-white text-black p-6">
                <ul className="flex flex-col gap-4 text-gray-800">
                  <li className="flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <a href="/">Services</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <a href="/">Capabilities</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Network className="w-4 h-4" />
                    <a href="/">Network</a>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="/" className="block text-sm mb-4 hover:text-gray-700">Log in</a>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 text-sm font-semibold">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
