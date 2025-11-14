import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-black border-t border-stone-900/80 py-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-stone-100 tracking-[0.25em] uppercase text-xs">The Order</h3>
            <p className="text-stone-400 mt-3 text-sm max-w-md">Join the signal. Early drops, encrypted coordinates, off-world dispatches.</p>
          </div>
          <form className="flex w-full max-w-md items-center gap-3">
            <input type="email" placeholder="your@signal" className="flex-1 bg-stone-950 border border-stone-800 px-4 py-3 text-stone-200 placeholder-stone-500 focus:outline-none focus:border-stone-600" />
            <button className="px-5 py-3 border border-stone-800 text-stone-200 uppercase tracking-[0.25em] text-[10px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">Transmit</button>
          </form>
        </div>
        <div className="mt-12 flex items-center justify-between text-stone-600 text-xs">
          <span>© 2077 The Order. All rites reserved.</span>
          <span className="hidden sm:inline">Void // Protocol v1.0</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
