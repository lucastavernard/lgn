import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <Features />
        <Portfolio />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
