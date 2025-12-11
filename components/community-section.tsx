"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

const restorations = [
  { id: 1, machine: "1974 Gaggia", owner: "Ethan R.", image: "/vintage-gaggia-espresso-machine-restored-chrome-br.jpg" },
  { id: 2, machine: "1968 Faema", owner: "Maria S.", image: "/vintage-faema-e61-espresso-machine-restored-stainl.jpg" },
  { id: 3, machine: "1982 La Pavoni", owner: "James T.", image: "/la-pavoni-europiccola-lever-espresso-machine-chrom.jpg" },
  { id: 4, machine: "1991 Rancilio", owner: "Sofia L.", image: "/rancilio-silvia-espresso-machine-stainless-steel-v.jpg" },
]

const testimonials = [
  { quote: "These guides saved my father's 1974 Gaggia.", author: "Ethan R.", location: "Portland, OR" },
  { quote: "Finally found authentic E61 gaskets. Perfect fit.", author: "Maria S.", location: "Rome, Italy" },
  { quote: "The attention to detail is unmatched.", author: "James T.", location: "London, UK" },
]

export function CommunitySection() {
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
          className="text-center mb-12"
        >
          <h2 className="font-[var(--font-cinzel)] text-3xl md:text-4xl lg:text-5xl text-ivory mb-4">
            Community of Restorers
          </h2>
          <p className="text-ivory/60 max-w-2xl mx-auto">
            Join thousands of espresso enthusiasts preserving the art of Italian coffee engineering.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {restorations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative aspect-square rounded-sm overflow-hidden border border-brass/20 cursor-pointer"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={`${item.machine} restoration by ${item.owner}`}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-smoked via-smoked/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-brass text-xs">{item.machine}</p>
                <p className="text-ivory/70 text-xs">by {item.owner}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="relative"
            >
              {/* Brass nameplate style */}
              <div className="relative bg-gradient-to-b from-brass/20 to-brass/5 border border-brass/30 rounded-sm p-6 hover:border-brass/50 transition-colors">
                {/* Screws decoration */}
                <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-brass/30 border border-brass/50" />
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brass/30 border border-brass/50" />
                <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-brass/30 border border-brass/50" />
                <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-brass/30 border border-brass/50" />

                <Quote className="w-6 h-6 text-brass/50 mb-3" />
                <p className="text-ivory/90 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="text-brass font-medium text-sm">{testimonial.author}</span>
                  <span className="text-ivory/40 text-xs">{testimonial.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
