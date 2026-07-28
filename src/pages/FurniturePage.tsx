import { useOutletContext } from 'react-router-dom';
import {
  FURNITURE_FEATURES,
  FURNITURE_GALLERY,
  FURNITURE_INTRO,
  FURNITURE_TAGLINE,
  FURNITURE_TITLE,
  furnitureBannerImage,
} from '../data/content';
import ServicePageLayout from '../components/ServicePageLayout';
import type { LayoutContext } from '../components/Layout';

export default function FurniturePage() {
  const { openGallery } = useOutletContext<LayoutContext>();
  const projects = FURNITURE_GALLERY.map((item) => ({
    title: item.title,
    areas: [],
    images: [item.url],
  }));

  return (
    <ServicePageLayout
      breadcrumb={`Serviços / ${FURNITURE_TITLE}`}
      title={FURNITURE_TITLE}
      tagline={FURNITURE_TAGLINE}
      bannerImage={furnitureBannerImage}
      introParagraphs={FURNITURE_INTRO}
      highlights={FURNITURE_FEATURES}
      galleryHeading={`Projetos de ${FURNITURE_TITLE}.`}
      galleryItems={projects}
      onOpenGallery={openGallery}
    />
  );
}
