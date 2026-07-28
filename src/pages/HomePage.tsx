import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Reviews from '../components/Reviews';
import WhyUs from '../components/WhyUs';
import type { LayoutContext } from '../components/Layout';

export default function HomePage() {
  const { openGallery } = useOutletContext<LayoutContext>();

  return (
    <>
      <Hero />
      <About />
      <Portfolio onOpenGallery={openGallery} />
      <Reviews />
      <WhyUs />
    </>
  );
}
