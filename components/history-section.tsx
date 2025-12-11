"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function HistorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Blueprint background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/vintage-technical-blueprint-espresso-machine-schem.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-[var(--font-cinzel)] text-3xl md:text-4xl lg:text-5xl text-brass leading-tight text-balance">
              For the Machines That Made Coffee History.
            </h2>
            <div className="space-y-4 text-ivory/70 leading-relaxed">
              <p className="text-lg">We source, document, and restore espresso machines built to last lifetimes.</p>
              <p>
                From Faema to Elektra — every screw, spring, and gasket matters. Our archive spans decades of Italian
                engineering excellence, preserving the heritage of espresso craftsmanship for future generations.
              </p>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="font-[var(--font-cinzel)] text-4xl text-brass">50+</div>
                <div className="text-ivory/50 text-sm">Years of Heritage</div>
              </div>
              <div className="w-px h-12 bg-brass/30" />
              <div className="text-center">
                <div className="font-[var(--font-cinzel)] text-4xl text-brass">200+</div>
                <div className="text-ivory/50 text-sm">Machine Models</div>
              </div>
              <div className="w-px h-12 bg-brass/30" />
              <div className="text-center">
                <div className="font-[var(--font-cinzel)] text-4xl text-brass">5K+</div>
                <div className="text-ivory/50 text-sm">Parts Catalogued</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-brass/20">
              <img
                src="/restored-vintage-la-marzocco-espresso-machine-bras.jpg"
                alt="Restored vintage espresso machine"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-smoked/60 to-transparent" />
            </div>
            {/* Decorative frame corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-brass" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-brass" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-brass" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-brass" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
