"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Coffee, Instagram, Youtube, Facebook } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <footer className="relative bg-espresso/50 border-t border-brass/20 overflow-hidden">
      {/* Smoke/steam background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-t from-smoked to-transparent" />
        {[...Array(3)].map((_, i) => (
          null
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        {/* Newsletter section */}
        <div className="text-center mb-16">
          <h3 className="font-[var(--font-cinzel)] text-2xl md:text-3xl text-brass mb-4">
            Preserve the Legacy of Espresso
          </h3>
          <p className="text-ivory/60 mb-6 max-w-md mx-auto">
            Get vintage restoration tips, new part arrivals, and workshop stories delivered to your inbox.
          </p>

          {subscribed ? (
            <div className="text-brass flex items-center justify-center gap-2">
              <Coffee className="w-5 h-5" />
              <span>Welcome to the workshop!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Get vintage restoration tips and part updates."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-smoked border-brass/30 text-ivory placeholder:text-ivory/40 focus:border-brass"
                required
              />
              <Button type="submit" className="bg-brass hover:bg-copper text-smoked font-semibold transition-colors">
                Subscribe <Coffee className="ml-2 w-4 h-4" />
              </Button>
            </form>
          )}
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-[var(--font-cinzel)] text-brass mb-4">Explore</h4>
            <ul className="space-y-2">
              {["Repair Guides", "Parts Shop", "Tools", "Gallery"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-ivory/60 hover:text-brass transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-[var(--font-cinzel)] text-brass mb-4">Machines</h4>
            <ul className="space-y-2">
              {["La Marzocco", "Faema", "Elektra", "La Pavoni", "Gaggia"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-ivory/60 hover:text-brass transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-[var(--font-cinzel)] text-brass mb-4">Support</h4>
            <ul className="space-y-2">
              {["Contact Us", "FAQ", "Shipping Info", "Returns"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-ivory/60 hover:text-brass transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-[var(--font-cinzel)] text-brass mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-ivory/60 hover:text-brass transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-brass/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 40 40" className="w-8 h-8 text-brass">
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M20 14 Q24 17 20 20 Q16 23 20 26"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.7"
                />
              </svg>
              <span className="font-[var(--font-playfair)] text-brass text-sm tracking-wider">VintageCoffeeRepair</span>
            </div>

            {/* Social links */}
            

            {/* Copyright */}
            
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="text-center py-4 bg-smoked/50 border-t border-brass/10">
        <p className="text-brass/60 text-sm italic">
          &ldquo;Because true flavor starts with perfect mechanics.&rdquo; ☕⚙️
        </p>
      </div>
    </footer>
  )
}
