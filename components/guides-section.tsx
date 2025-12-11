"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Coffee, Cog, Wind, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", label: "All Guides", icon: null },
  { id: "espresso", label: "Espresso Machines", icon: Coffee },
  { id: "grinders", label: "Grinders", icon: Cog },
  { id: "steam", label: "Steam Units", icon: Wind },
  { id: "cleaning", label: "Cleaning Systems", icon: Sparkles },
]

const guides = [
  {
    id: 1,
    title: "La Marzocco Linea Classic",
    category: "espresso",
    era: "1990s",
    difficulty: "Advanced",
    image: "La Marzocco Linea Classic espresso machine chrome brass",
  },
  {
    id: 2,
    title: "Faema E61 Legend",
    category: "espresso",
    era: "1961",
    difficulty: "Expert",
    image: "Faema E61 vintage espresso machine Italian design",
  },
  {
    id: 3,
    title: "Elektra Micro Casa",
    category: "espresso",
    era: "1980s",
    difficulty: "Intermediate",
    image: "Elektra Micro Casa lever espresso machine copper",
  },
  {
    id: 4,
    title: "La Pavoni Europiccola",
    category: "espresso",
    era: "1961",
    difficulty: "Beginner",
    image: "La Pavoni Europiccola chrome lever espresso",
  },
  {
    id: 5,
    title: "Mazzer Super Jolly",
    category: "grinders",
    era: "1990s",
    difficulty: "Intermediate",
    image: "Mazzer Super Jolly coffee grinder professional",
  },
  {
    id: 6,
    title: "Rancilio Rocky",
    category: "grinders",
    era: "2000s",
    difficulty: "Beginner",
    image: "Rancilio Rocky doserless grinder silver",
  },
  {
    id: 7,
    title: "Gaggia Classic Steam",
    category: "steam",
    era: "1991",
    difficulty: "Intermediate",
    image: "Gaggia Classic steam wand espresso machine",
  },
  {
    id: 8,
    title: "E61 Group Head Rebuild",
    category: "espresso",
    era: "All",
    difficulty: "Advanced",
    image: "E61 group head exploded view brass chrome",
  },
  {
    id: 9,
    title: "Backflush Maintenance",
    category: "cleaning",
    era: "All",
    difficulty: "Beginner",
    image: "espresso machine cleaning maintenance portafilter",
  },
]

export function GuidesSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredGuides = activeCategory === "all" ? guides : guides.filter((g) => g.category === activeCategory)

  return (
    null
  )
}

function GuideCard({ guide }: { guide: (typeof guides)[0] }) {
  return (
    <div className="group relative bg-card border border-brass/10 hover:border-brass/40 rounded-sm overflow-hidden transition-all duration-300">
      {/* Blueprint overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
        <div className="absolute inset-0 bg-brass/5" />
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#CDAA5C" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={`/.jpg?height=300&width=400&query=${encodeURIComponent(guide.image)}`}
          alt={guide.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-smoked via-smoked/20 to-transparent" />

        {/* Era badge */}
        <div className="absolute top-3 right-3 bg-smoked/80 backdrop-blur-sm text-brass text-xs px-2 py-1 rounded-sm border border-brass/20">
          {guide.era}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-[var(--font-cinzel)] text-lg text-ivory group-hover:text-brass transition-colors">
          {guide.title}
        </h3>
        <div className="flex items-center justify-between">
          <span
            className={`text-xs px-2 py-1 rounded-sm ${
              guide.difficulty === "Beginner"
                ? "bg-green-900/30 text-green-400"
                : guide.difficulty === "Intermediate"
                  ? "bg-yellow-900/30 text-yellow-400"
                  : guide.difficulty === "Advanced"
                    ? "bg-orange-900/30 text-orange-400"
                    : "bg-red-900/30 text-red-400"
            }`}
          >
            {guide.difficulty}
          </span>
          <ArrowRight className="w-4 h-4 text-brass opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  )
}
