import type { PortfolioItem } from '../data/content';

interface PortfolioCardProps {
  item: PortfolioItem;
  onOpenGallery: (images: string[]) => void;
}

export default function PortfolioCard({ item, onOpenGallery }: PortfolioCardProps) {
  return (
    <div
      className="group relative aspect-square overflow-hidden bg-slate-100 cursor-zoom-in"
      onClick={() => onOpenGallery(item.images)}
    >
      <img
        src={item.images[0]}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xs font-bold uppercase tracking-widest">{item.title}</p>
      </div>
    </div>
  );
}
