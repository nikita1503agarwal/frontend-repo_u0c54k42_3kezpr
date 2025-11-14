import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Layer = ({ speed = 1, children }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * -80])

  return (
    <motion.div ref={ref} style={{ y }} className="will-change-transform">
      {children}
    </motion.div>
  )
}

const Card = ({ title, subtitle, img }) => {
  return (
    <div className="group relative overflow-hidden border border-stone-800 bg-[#0c0c0c] p-6 md:p-8 transition-colors duration-300 hover:border-stone-600">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
          background: 'radial-gradient(1200px 240px at var(--x,50%) var(--y,0%), rgba(160, 255, 210, 0.08), rgba(0,0,0,0))'
        }} />
        <div className="absolute inset-0 mix-blend-overlay bg-[linear-gradient(120deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_20%)]" />
      </div>
      <div className="aspect-[4/3] w-full bg-stone-900/60 mb-6 flex items-center justify-center text-stone-500 uppercase tracking-widest text-xs border border-stone-800">
        {img ? <img src={img} alt={title} className="object-cover w-full h-full" /> : 'Asset Coming Soon'}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-stone-200 text-lg font-semibold tracking-wide">{title}</h3>
          <p className="text-stone-400 text-xs mt-1 uppercase tracking-widest">{subtitle}</p>
        </div>
        <span className="h-px w-10 bg-gradient-to-r from-stone-600/30 via-stone-300/80 to-stone-600/30" />
      </div>
    </div>
  )
}

const ParallaxGrid = () => {
  useEffect(() => {
    const root = document.getElementById('grid')
    if (!root) return
    const handler = (e) => {
      const cards = root.querySelectorAll('.group')
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        card.style.setProperty('--x', x + '%')
        card.style.setProperty('--y', y + '%')
      })
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section id="grid" className="relative w-full bg-black py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10">
        <Layer speed={0.6}>
          <h2 className="text-stone-100 text-2xl md:text-3xl tracking-[0.2em] uppercase mb-10">Catalogue // Series-01</h2>
        </Layer>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <Layer speed={1.2}>
            <Card title="Specter Jacket" subtitle="Mk.II — Carbon Weave" />
          </Layer>
          <Layer speed={0.8}>
            <Card title="Ghost Shell" subtitle="Armor Plating — Nero" />
          </Layer>
          <Layer speed={1.4}>
            <Card title="Neon Shrine" subtitle="Signal Tee — Onyx" />
          </Layer>
          <Layer speed={0.9}>
            <Card title="Vector Cargo" subtitle="Modular — Stealth Grey" />
          </Layer>
          <Layer speed={1.3}>
            <Card title="Cipher Hoodie" subtitle="Thermal Mesh — Void" />
          </Layer>
          <Layer speed={1.0}>
            <Card title="Monolith Boots" subtitle="Mag-Clasp — Obsidian" />
          </Layer>
        </div>
      </div>
    </section>
  )
}

export default ParallaxGrid
