import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-bold tracking-wide">Mischief Kenya</p>
            <p className="text-[11px] text-fuchsia-200/80 uppercase tracking-[0.2em]">Cosmic Artist</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => scrollTo('music')} className="text-slate-200 hover:text-white transition">Music</button>
          <button onClick={() => scrollTo('about')} className="text-slate-200 hover:text-white transition">About</button>
          <button onClick={() => scrollTo('contact')} className="text-slate-200 hover:text-white transition">Contact</button>
          <a href="#music" onClick={(e)=>{e.preventDefault();scrollTo('music')}} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition">Listen</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            <button onClick={() => scrollTo('music')} className="text-slate-200 text-left">Music</button>
            <button onClick={() => scrollTo('about')} className="text-slate-200 text-left">About</button>
            <button onClick={() => scrollTo('contact')} className="text-slate-200 text-left">Contact</button>
          </div>
        </div>
      )}
    </header>
  )
}
