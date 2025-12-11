"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const quotes = [
  "The hum of a boiler is the sound of heritage.",
  "To fix is to honor craftsmanship.",
  "Every restoration breathes new life into history.",
]

export function PassionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-smoked to-espresso/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-[var(--font-cinzel)] text-3xl md:text-4xl lg:text-5xl text-brass mb-4">
            Precision Meets Passion
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Images side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative aspect-square rounded-sm overflow-hidden border border-brass/20">
                <img src="/steam-valve-macro-brass-vintage-espresso-machine-d.jpg" alt="Steam valve detail" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-smoked/50 to-transparent" />
              </div>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-brass/20">
                <img
                  src="/pressure-gauge-vintage-espresso-machine-brass-deta.jpg"
                  alt="Pressure gauge detail"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-smoked/50 to-transparent" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-brass/20">
                <img
                  src="/portafilter-basket-macro-coffee-grounds-espresso.jpg"
                  alt="Portafilter basket detail"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-smoked/50 to-transparent" />
              </div>
              <div className="relative aspect-square rounded-sm overflow-hidden border border-brass/20">
                <img
                  src="/copper-pipes-boiler-espresso-machine-interior-deta.jpg"
                  alt="Copper pipes detail"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-smoked/50 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Quotes side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {quotes.map((quote, index) => (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                className="relative pl-6 border-l-2 border-brass/50"
              >
                <p className="font-[var(--font-cinzel)] text-xl md:text-2xl text-ivory/90 italic">
                  &ldquo;{quote}&rdquo;
                </p>
              </motion.blockquote>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="pt-4"
            >
              <p className="text-ivory/50 text-sm">— The Philosophy of VintageCoffeeRepair</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
