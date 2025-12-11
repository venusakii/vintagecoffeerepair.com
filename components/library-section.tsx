"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookOpen } from "lucide-react"
import Image from "next/image"

const binders = [
  { name: "E61 Group", count: 12, image: "/e61-espresso-machine-group-head-vintage.jpg" },
  { name: "La Pavoni", count: 8, image: "/la-pavoni-lever-espresso-machine-vintage-chrome.jpg" },
  { name: "Gaggia", count: 15, image: "/gaggia-classic-espresso-machine-vintage.jpg" },
  { name: "Rancilio", count: 10, image: "/rancilio-silvia-espresso-machine-stainless-steel.jpg" },
  { name: "Elektra", count: 6, image: "/elektra-microcasa-espresso-machine-copper-brass.jpg" },
  { name: "Faema", count: 9, image: "/faema-e61-espresso-machine-vintage-italian.jpg" },
  { name: "La Marzocco", count: 11, image: "/la-marzocco-linea-espresso-machine-professional.jpg" },
  { name: "Nuova Simonelli", count: 7, image: "/nuova-simonelli-espresso-machine-commercial.jpg" },
]

export function LibrarySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-smoked">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-cinzel)] text-3xl md:text-4xl lg:text-5xl text-ivory mb-4">
            The Library of Pressure
          </h2>
          <p className="text-ivory/60 max-w-2xl mx-auto">
            Our comprehensive archive of technical documentation, organized by manufacturer.
          </p>
        </motion.div>

        {/* Bookshelf */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Shelf background */}
          <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-espresso to-espresso/50 rounded-b" />

          {/* Binders grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 pb-6">
            {binders.map((binder, index) => (
              <motion.div
                key={binder.name}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="cursor-pointer"
              >
                <div className="relative group">
                  {/* Binder spine with image */}
                  <div className="relative border border-brass/30 rounded-sm overflow-hidden aspect-[3/4] flex flex-col justify-between shadow-lg group-hover:border-brass/60 transition-all">
                    {/* Background image */}
                    <Image src={binder.image || "/placeholder.svg"} alt={binder.name} fill className="object-cover" />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-espresso/30" />

                    {/* Content overlay */}
                    <div className="relative z-10 flex flex-col justify-between h-full p-3">
                      {/* Top decoration */}
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-brass/50" />
                        <div className="w-1 h-1 rounded-full bg-brass/50" />
                      </div>

                      {/* Title */}
                      <div className="flex-1 flex items-center justify-center">
                        <h3 className="font-[var(--font-cinzel)] text-xs text-center text-ivory group-hover:text-brass transition-colors leading-tight drop-shadow-md">
                          {binder.name}
                        </h3>
                      </div>

                      {/* Bottom info */}
                      <div className="flex items-center justify-between">
                        <BookOpen className="w-3 h-3 text-brass/70" />
                        <span className="text-[10px] text-brass/70">{binder.count}</span>
                      </div>
                    </div>

                    {/* Spine edge effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-brass/30 to-transparent z-10" />

                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-brass/0 group-hover:bg-brass/10 transition-colors z-10" />
                  </div>

                  {/* Shadow */}
                  <div className="absolute -bottom-2 left-1 right-1 h-4 bg-black/30 blur-md rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Wooden shelf */}
          <div className="h-3 bg-gradient-to-b from-amber-900/60 to-amber-950/80 rounded-sm shadow-lg" />
        </motion.div>
      </div>
    </section>
  )
}
