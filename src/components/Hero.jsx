import Spline from '@splinetool/react-spline'
import { MoveRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none"/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 md:pt-48">
        <div className="max-w-2xl">
          <p className="text-fuchsia-300/90 uppercase tracking-[0.3em] text-xs mb-4">Futuristic Alt • Afro-fusion • Cosmic Pop</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_10px_40px_rgba(217,70,239,0.25)]">
            Mischief Kenya
          </h1>
          <p className="mt-4 text-slate-200/90 md:text-lg">
            A trippy voyage through neon galaxies and liquid rhythms. Tap in and ride the waveform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#music" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 text-white font-semibold shadow-lg shadow-fuchsia-500/20">
              Listen now <MoveRight className="w-4 h-4"/>
            </a>
            <a href="#about" className="px-5 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition">
              Meet the artist
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
