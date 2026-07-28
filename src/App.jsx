import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'

function App() {
  return (
    <div className="relative min-h-screen w-full bg-slate-950">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

      {/* Contenu */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
      </div>

    </div>
  )
}

export default App