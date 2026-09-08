import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { Programs } from './components/sections/Programs';
import { Trainers } from './components/sections/Trainers';
import { Memberships } from './components/sections/Memberships';
import { Facilities } from './components/sections/Facilities';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { About } from './components/sections/About';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gym-dark text-gym-text">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Trainers />
        <Memberships />
        <Facilities />
        <Testimonials />
        <FAQ />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
