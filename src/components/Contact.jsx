import { Mail, Instagram, Music2 } from 'lucide-react'

export default function Contact(){
  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_10%_80%,rgba(217,70,239,0.12),transparent),radial-gradient(500px_200px_at_90%_20%,rgba(34,211,238,0.12),transparent)]"/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white">Stay in orbit</h3>
              <p className="text-slate-300 mt-3">Booking, collabs, or just to say hey — let’s connect.</p>
              <div className="mt-6 space-y-3 text-slate-200">
                <a href="mailto:booking@mischiefkenya.com" className="flex items-center gap-3 hover:text-white transition"><Mail className="w-4 h-4"/> booking@mischiefkenya.com</a>
                <a href="https://instagram.com" target="_blank" className="flex items-center gap-3 hover:text-white transition"><Instagram className="w-4 h-4"/> @mischiefkenya</a>
                <a href="#music" className="flex items-center gap-3 hover:text-white transition"><Music2 className="w-4 h-4"/> Listen to music</a>
              </div>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Your email</label>
                <input type="email" required className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="you@galaxy.com"/>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Message</label>
                <textarea rows="4" required className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Let’s build a world together..."/>
              </div>
              <button className="px-5 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 text-white font-semibold">Send</button>
            </form>
          </div>
        </div>
        <p className="text-center text-slate-400 text-sm mt-8">© {new Date().getFullYear()} Mischief Kenya — All rights reserved.</p>
      </div>
    </section>
  )
}
