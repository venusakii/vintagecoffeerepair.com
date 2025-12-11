"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const parts = [
  {
    id: 1,
    name: "E61 Group Gasket Set",
    brand: "Faema",
    price: "$24.99",
    image: "espresso machine group head gasket rubber seal",
  },
  {
    id: 2,
    name: "Brass Shower Screen",
    brand: "IMS",
    price: "$32.00",
    image: "espresso brass shower screen precision holes",
  },
  {
    id: 3,
    name: "Pressure Gauge 0-16 Bar",
    brand: "La Marzocco",
    price: "$45.00",
    image: "espresso machine pressure gauge brass vintage",
  },
  {
    id: 4,
    name: "Steam Valve Rebuild Kit",
    brand: "Rancilio",
    price: "$28.50",
    image: "steam valve kit espresso machine parts chrome",
  },
  {
    id: 5,
    name: "Copper Boiler Heating Element",
    brand: "Elektra",
    price: "$89.00",
    image: "copper heating element espresso boiler coil",
  },
  {
    id: 6,
    name: "Portafilter Handle Walnut",
    brand: "Custom",
    price: "$55.00",
    image: "portafilter handle walnut wood grain brass",
  },
]

export function PartsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-smoked">
      
    </section>
  )
}

function PartCard({ part }: { part: (typeof parts)[0] }) {
  return (
    <div className="group relative">
      {/* Metal frame effect */}
      <div className="absolute -inset-1 bg-gradient-to-b from-brass/20 via-brass/10 to-brass/5 rounded-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 to-smoked rounded-sm" />

      {/* Inner card */}
      <div className="relative bg-card border border-brass/20 rounded-sm overflow-hidden">
        {/* Image with lamp light effect on hover */}
        <div className="relative aspect-square overflow-hidden bg-espresso/30">
          <img
            src={`/.jpg?key=vj05h&height=400&width=400&query=${encodeURIComponent(part.image)}`}
            alt={part.name}
            className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
          />
          {/* Desk lamp light effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-brass/0 to-brass/0 group-hover:from-brass/20 group-hover:to-transparent transition-all duration-500" />
          <div className="absolute inset-0 shadow-inner" style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)" }} />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-brass/70 text-xs uppercase tracking-wider">{part.brand}</p>
              <h3 className="font-medium text-ivory group-hover:text-brass transition-colors">{part.name}</h3>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="w-full border-brass/30 text-ivory/70 hover:border-brass hover:text-brass hover:bg-brass/10 group/btn mt-2 bg-transparent"
          >
            View on Amazon
            <ExternalLink className="ml-2 w-3 h-3 opacity-50 group-hover/btn:opacity-100" />
          </Button>
        </div>
      </div>
    </div>
  )
}
