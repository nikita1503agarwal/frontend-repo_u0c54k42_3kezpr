import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle vignette + gradient overlay for contrast; pointer events disabled to keep Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

      {/* Copy */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl text-balance text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[0.02em] leading-[1.05] text-stone-100"
            style={{ textTransform: 'uppercase', letterSpacing: '0.06em' }}
          >
            Ascend To The Order.
          </motion.h1>

          <motion.p
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-stone-300/80 text-sm md:text-base font-medium"
          >
            Retro–futurist street armor engineered for the midnight city. No mascots. No mercy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex items-center gap-6"
          >
            <a
              href="#grid"
              className="group inline-flex items-center border border-stone-700/70 px-6 py-3 text-stone-200 uppercase tracking-widest text-xs md:text-sm font-semibold shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-sm metallic-edge"
            >
              Enter Catalogue
              <span className="ml-3 block h-px w-8 bg-gradient-to-r from-stone-500/20 via-stone-300 to-stone-500/20 transition-all duration-300 group-hover:w-12" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
