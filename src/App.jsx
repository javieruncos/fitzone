import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Programs } from './components/sections/Programs';
import { About } from './components/sections/About';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gym-dark text-gym-text">
      <Header />
      <main>
        <Hero />
        <Features />
        <Programs />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
