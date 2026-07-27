import { useState } from 'react';
import Header from './components/Header';
import Lightbox from './components/Lightbox';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-slate-900 selection:text-white">
      <Lightbox selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
      <Header />
      <Hero />
      <About />
      {/* <Services /> */}
      {/* <Furniture onSelectImage={setSelectedImage} /> */}
      <Portfolio onSelectImage={setSelectedImage} />
      <Reviews />
      <WhyUs />
      <Footer />
    </div>
  );
}
