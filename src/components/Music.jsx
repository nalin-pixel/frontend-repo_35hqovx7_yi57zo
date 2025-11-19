import { Play, Pause, Music2, ExternalLink } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const tracks = [
  {
    title: 'Cosmic Drift',
    subtitle: 'feat. Nebula Nine',
    cover: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop',
    src: 'https://images.unsplash.com/photo-1547999962-65403ca852f9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3NtaWMlMjBEcmlmdHxlbnwwfDB8fHwxNzYzNTY3NDcxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    links: {
      spotify: 'https://open.spotify.com/',
      apple: 'https://music.apple.com/',
    },
  },
  {
    title: 'Neon Mirage',
    subtitle: 'Outer Orbit Edit',
    cover: 'https://images.unsplash.com/photo-1542759564-4e3a0d1d6d36?q=80&w=800&auto=format&fit=crop',
    src: 'https://images.unsplash.com/photo-1513624966781-e5797f1a372a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwTWlyYWdlfGVufDB8MHx8fDE3NjM1Njc0NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    links: {
      spotify: 'https://open.spotify.com/',
      apple: 'https://music.apple.com/',
    },
  },
  {
    title: 'Starlight Run',
    subtitle: 'Live at The Observatory',
    cover: 'https://images.unsplash.com/photo-1517816528003-6f3a78ed3dbf?q=80&w=800&auto=format&fit=crop',
    src: 'https://images.unsplash.com/photo-1575089058817-6527dea2bffe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGFybGlnaHQlMjBSdW58ZW58MHwwfHx8MTc2MzU2NzQ3Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    links: {
      spotify: 'https://open.spotify.com/',
      apple: 'https://music.apple.com/',
    },
  },
]

export default function Music() {
  const audioRef = useRef(new Audio())
  const [current, setCurrent] = useState(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!current) return
    audio.src = current.src
    if (playing) audio.play()
    return () => audio.pause()
  }, [current])

  const togglePlay = (track) => {
    const audio = audioRef.current
    if (!current || current.title !== track.title) {
      setCurrent(track)
      setPlaying(true)
      audio.src = track.src
      audio.play()
    } else {
      if (playing) {
        audio.pause()
        setPlaying(false)
      } else {
        audio.play()
        setPlaying(true)
      }
    }
  }

  return (
    <section id="music" className="relative py-24 bg-gradient-to-b from-black to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_20%,rgba(217,70,239,0.15),transparent),radial-gradient(600px_200px_at_90%_80%,rgba(34,211,238,0.12),transparent)]"/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Latest Releases</h2>
            <p className="text-slate-300 mt-2">Press play and drift through the cosmos.</p>
          </div>
          <Music2 className="w-8 h-8 text-fuchsia-300 hidden md:block"/>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((t) => (
            <div key={t.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={t.cover} alt={t.title} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition duration-700"/>
              </div>
              <div className="p-5">
                <p className="text-sm text-fuchsia-200/80">{t.subtitle}</p>
                <h3 className="text-white font-semibold text-lg">{t.title}</h3>

                <div className="mt-4 flex items-center gap-3">
                  <button onClick={() => togglePlay(t)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow">
                    {current?.title === t.title && playing ? <Pause className="w-4 h-4"/> : <Play className="w-4 h-4"/>}
                    {current?.title === t.title && playing ? 'Pause' : 'Play'}
                  </button>
                  <a href={t.links.spotify} target="_blank" className="text-slate-300 hover:text-white inline-flex items-center gap-1">
                    Spotify <ExternalLink className="w-3 h-3"/>
                  </a>
                  <a href={t.links.apple} target="_blank" className="text-slate-300 hover:text-white inline-flex items-center gap-1">
                    Apple <ExternalLink className="w-3 h-3"/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
