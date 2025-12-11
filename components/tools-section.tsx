"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const tools = [
  { id: 1, name: "Precision Tamper Base", price: "$65.00", image: "espresso tamper stainless steel precision base" },
  { id: 2, name: "Group Head Brush Set", price: "$18.00", image: "espresso machine cleaning brush set brass handle" },
  { id: 3, name: "Gasket Pick Tool", price: "$12.00", image: "gasket removal tool espresso machine stainless" },
  { id: 4, name: "Digital Pressure Gauge", price: "$89.00", image: "digital pressure gauge espresso machine testing" },
  { id: 5, name: "Silicone Gasket Kit", price: "$24.00", image: "silicone gasket kit espresso various sizes" },
  { id: 6, name: "Brass Dispersion Plate", price: "$45.00", image: "brass dispersion plate E61 espresso machine" },
]

export function ToolsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    null
  )
}
