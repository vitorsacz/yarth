import { useOutletContext } from 'react-router-dom';
import { PROJECT_GALLERY, SERVICES } from '../data/content';
import ServicePageLayout from '../components/ServicePageLayout';
import type { LayoutContext } from '../components/Layout';

interface ServicePageProps {
  slug: string;
}

export default function ServicePage({ slug }: ServicePageProps) {
  const { openGallery } = useOutletContext<LayoutContext>();
  const service = SERVICES.find((s) => s.slug === slug)!;
  const projects = PROJECT_GALLERY.filter((item) => item.areas.includes(service.areaTag));

  return (
    <ServicePageLayout
      breadcrumb={`Serviços / ${service.title}`}
      title={service.title}
      tagline={service.description}
      bannerImage={service.image}
      introParagraphs={service.longDescription}
      highlights={service.highlights}
      galleryHeading={`Projetos de ${service.title}.`}
      galleryItems={projects}
      onOpenGallery={openGallery}
    />
  );
}
