import Hero from './components/Hero'
import Projects from './components/Projects'
import LabChallenges from './components/LabChallenges'
import Navigation from './components/Navigation'
import Contact from './components/Contact'
import Resume from './components/Resume'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
       <Navigation/>
      <Hero/>
      <Resume/>
      <Projects/>
      <LabChallenges/>
      <Contact/>
            {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 Silvia Gathei.
          </p>
        </div>
      </footer>
    </main>
  )
}
