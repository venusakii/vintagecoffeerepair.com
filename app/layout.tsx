import type React from "react"
import type { Metadata } from "next"
import { Inter, Cinzel_Decorative, Playfair_Display_SC } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
})
const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "VintageCoffeeRepair.com — Restoring the Art of Extraction",
  description:
    "Hyper-specialized repair guides and authentic parts for vintage, high-end coffee gear. Restore. Rebuild. Rebrew.",
  keywords: [
    "vintage espresso",
    "coffee machine repair",
    "La Marzocco",
    "Faema",
    "Elektra",
    "espresso parts",
    "restoration",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.jpg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cinzel.variable} ${playfair.variable} font-sans antialiased bg-smoked text-ivory`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
