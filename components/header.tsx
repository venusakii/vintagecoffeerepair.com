"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides" },
  { name: "Parts", href: "/parts" },
  { name: "Tools", href: "/tools" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-smoked/90 backdrop-blur-md border-b border-brass/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <svg viewBox="0 0 40 40" className="w-10 h-10 text-brass">
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 20 L28 20 M20 12 L20 28 M14 14 L26 26 M26 14 L14 26"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
                <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M20 14 Q24 17 20 20 Q16 23 20 26"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  className="opacity-70"
                />
              </svg>
              <div className="absolute inset-0 bg-brass/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-[var(--font-playfair)] text-brass text-lg md:text-xl tracking-wider hidden sm:block">
              VintageCoffeeRepair
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-ivory/80 hover:text-brass transition-colors text-sm tracking-wide relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brass transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-smoked/95 backdrop-blur-md border-t border-brass/20 animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-ivory/80 hover:text-brass py-2 px-4 rounded hover:bg-brass/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
