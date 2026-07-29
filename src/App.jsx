import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Technologies } from './components/Technologies'

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-950">

      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
      </div>

    </div>
  )
}

export default App