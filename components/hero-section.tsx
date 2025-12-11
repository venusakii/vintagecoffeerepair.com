"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cog } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-smoked via-espresso/30 to-smoked" />

      {/* Animated steam elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted &&
          [...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-ivory/5 blur-3xl steam-effect"
              style={{
                left: `${15 + i * 15}%`,
                bottom: "20%",
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
      </div>

      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/vintage-espresso-machine-brass-steam-workshop-dark.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative gears */}
      <div className="absolute top-32 left-10 opacity-10">
        <Cog className="w-32 h-32 text-brass animate-spin" style={{ animationDuration: "20s" }} />
      </div>
      <div className="absolute bottom-32 right-10 opacity-10">
        <Cog
          className="w-24 h-24 text-copper animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="space-y-6">
          {/* Tagline */}
          <p className="text-brass tracking-[0.3em] uppercase text-sm md:text-base">
            Est. Since the Golden Age of Espresso
          </p>

          {/* Main heading with line-by-line animation */}
          <h1 className="font-[var(--font-cinzel)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-ivory leading-tight">
            <span
              className={`block transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Restore.
            </span>
            <span
              className={`block text-brass transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Rebuild.
            </span>
            <span
              className={`block transition-all duration-700 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Rebrew.
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-ivory/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Hyper-specialized repair guides and authentic parts for vintage, high-end coffee gear.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-700 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <Button size="lg" className="bg-brass hover:bg-brass/90 text-smoked font-semibold px-8 py-6 text-lg group">
              Explore Repair Guides
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brass/50 text-brass hover:bg-brass/10 hover:border-brass px-8 py-6 text-lg group bg-transparent"
            >
              Shop Parts
              <Cog className="ml-2 w-5 h-5 transition-transform group-hover:rotate-90" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col items-center gap-2 text-ivory/40">
            <span className="text-xs tracking-widest uppercase">Scroll to Discover</span>
            <div className="w-px h-12 bg-gradient-to-b from-brass to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
