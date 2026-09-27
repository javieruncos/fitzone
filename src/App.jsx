import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { Programs } from './components/sections/Programs';
import { Trainers } from './components/sections/Trainers';
import { Schedule } from './components/sections/Schedule';
import { Memberships } from './components/sections/Memberships';
import { Facilities } from './components/sections/Facilities';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { About } from './components/sections/About';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gym-dark text-gym-text">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gym-accent focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:text-sm"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Programs />
        <Facilities />
        <Trainers />
        <Schedule />
        <Memberships />
        <Testimonials />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
