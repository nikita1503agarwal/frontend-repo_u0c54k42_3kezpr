import React from 'react'
import { motion } from 'framer-motion'

const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-stone-900/80 bg-black/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 select-none">
          <div className="size-3 bg-gradient-to-b from-stone-300 to-stone-600" />
          <span className="text-stone-200 tracking-[0.35em] uppercase text-xs">Order // 2077</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-stone-300/80 uppercase tracking-[0.25em] text-[11px]">
          <a href="#grid" className="hover:text-stone-100 transition-colors">Catalogue</a>
          <a href="#story" className="hover:text-stone-100 transition-colors">Lore</a>
          <a href="#contact" className="hover:text-stone-100 transition-colors">Signal</a>
        </nav>
        <motion.button whileTap={{ scale: 0.96 }} className="px-4 py-1.5 border border-stone-800 text-stone-200 uppercase tracking-[0.25em] text-[10px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          Access
        </motion.button>
      </div>
    </header>
  )
}

export default Nav
