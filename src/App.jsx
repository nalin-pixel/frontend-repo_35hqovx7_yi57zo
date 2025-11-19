import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Music from './components/Music'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Music />
      <About />
      <Contact />
    </div>
  )
}

export default App
