import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Lightbox from './Lightbox';
import Footer from './Footer';

export interface LayoutContext {
  openGallery: (images: string[]) => void;
}

export default function Layout() {
  const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-slate-900 selection:text-white">
      <Lightbox images={selectedGallery} onClose={() => setSelectedGallery(null)} />
      <Header />
      <Outlet context={{ openGallery: setSelectedGallery } satisfies LayoutContext} />
      <Footer />
    </div>
  );
}
