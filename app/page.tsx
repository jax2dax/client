"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <section className="relative text-center py-45 overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      {/* Animated floating circles in the background */}
      <div className="absolute top-0 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200 opacity-40 animate-bounce-slow"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-pink-300 opacity-30 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full bg-pink-100 opacity-20 animate-spin-slow"></div>

      {/* Hero Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-pink-600 mb-6"
      >
        Freshly Baked With Love 💗
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-600 mb-10"
      >
        Homemade cakes, cookies, cinnamon rolls, chocolate strawberries,
        and custom sweet treats made to order.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Link
          href="/treats"
          className="inline-block bg-pink-500 hover:bg-pink-600
                     transition-transform transform hover:scale-105 text-white px-8 py-4 rounded-full text-lg shadow-lg"
        >
          Browse Treats
        </Link>
      </motion.div>
    </section>
  )
}
