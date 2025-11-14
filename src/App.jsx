import React from 'react'
import Hero from './components/Hero'
import ParallaxGrid from './components/ParallaxGrid'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-stone-200">
      <Nav />
      <main className="pt-16">
        <Hero />
        <ParallaxGrid />
        <section id="story" className="relative w-full bg-gradient-to-b from-black via-[#0b0b0b] to-black py-24 md:py-32 border-y border-stone-900/80">
          <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <h2 className="text-stone-100 text-2xl md:text-3xl tracking-[0.2em] uppercase">Lore // Black Circuit</h2>
              <p className="mt-5 text-stone-400 text-sm leading-relaxed">A clandestine network of makers forging artifacts for the neon dusk. Every piece is a fragment of a larger myth—etched in carbon and chrome, tuned for velocity, born in silence.</p>
            </div>
            <div className="md:col-span-7">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="h-40 bg-stone-950 border border-stone-900" />
                <div className="h-40 bg-stone-950 border border-stone-900" />
                <div className="h-40 bg-stone-950 border border-stone-900" />
                <div className="h-40 bg-stone-950 border border-stone-900" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
