import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Cases from './components/Cases';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Cases />
      <CTA />
      <footer className="bg-slate-950 text-slate-400 text-sm py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Niks Geen Gedoe — Advertising Bureau</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
