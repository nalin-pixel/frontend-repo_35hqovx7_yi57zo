export default function About(){
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_20%_10%,rgba(34,211,238,0.12),transparent),radial-gradient(500px_200px_at_80%_90%,rgba(217,70,239,0.12),transparent)]"/>
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Mischief Kenya</h2>
          <p className="text-slate-300 mt-4 leading-relaxed">
            Mischief Kenya crafts sonic journeys that bend light and space, fusing Afro-leaning rhythms with futuristic textures. The result: music that feels like surfing a glowing rollercoaster through a holographic night sky.
          </p>
          <p className="text-slate-300 mt-4">
            Performing across immersive shows and digital realms, Mischief evokes motion, color, and wonder. Each release is a portal – step through and drift.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-tr from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20 p-1">
            <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop" alt="Artist" className="w-full h-full object-cover rounded-3xl"/>
          </div>
        </div>
      </div>
    </section>
  )
}
