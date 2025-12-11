"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const stories = [
  {
    id: 1,
    title: "The Roman Basement Find",
    description: "Found in a Roman café basement, rebuilt over 60 hours of handwork.",
    machine: "1963 Faema President",
    image: "/faema-president-restoration.jpg",
  },
  {
    id: 2,
    title: "A Family Heirloom Reborn",
    description: "Three generations of coffee memories restored to perfection.",
    machine: "1974 Gaggia Orione",
    image: "/gaggia-orione-restoration.jpg",
  },
  {
    id: 3,
    title: "The Traveling Barista's Companion",
    description: "Carried across Europe by a traveling espresso craftsman.",
    machine: "1958 La Pavoni Professional",
    image: "/la-pavoni-professional-restoration.jpg",
  },
]

export function WorkshopStories() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const nextStory = () => setCurrentIndex((prev) => (prev + 1) % stories.length)
  const prevStory = () => setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-espresso/20 to-smoked overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-[var(--font-cinzel)] text-3xl md:text-4xl lg:text-5xl text-ivory mb-4">
            Workshop Stories
          </h2>
          <p className="text-ivory/60 max-w-2xl mx-auto">
            Every restoration tells a story. Explore the journeys of machines brought back to life.
          </p>
        </motion.div>

        {/* Cinematic slideshow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden border border-brass/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={stories[currentIndex].image || "/placeholder.svg"}
                  alt={stories[currentIndex].title}
                  className="object-cover w-full h-full grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-smoked via-smoked/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-smoked via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-end p-6 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-xl"
                >
                  <p className="text-brass text-sm tracking-wider mb-2">{stories[currentIndex].machine}</p>
                  <h3 className="font-[var(--font-cinzel)] text-2xl md:text-3xl lg:text-4xl text-ivory mb-3">
                    {stories[currentIndex].title}
                  </h3>
                  <p className="text-ivory/70 text-lg mb-4 italic">&ldquo;{stories[currentIndex].description}&rdquo;</p>
                  <Button
                    variant="outline"
                    className="border-brass/50 text-brass hover:bg-brass/10 hover:border-brass group bg-transparent"
                  >
                    Read Full Restoration
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevStory}
                className="border-brass/30 text-brass hover:bg-brass/10 hover:border-brass bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-1 mx-2">
                {stories.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentIndex ? "bg-brass" : "bg-brass/30"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextStory}
                className="border-brass/30 text-brass hover:bg-brass/10 hover:border-brass bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
