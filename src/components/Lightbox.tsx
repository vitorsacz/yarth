import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[] | null;
  onClose: () => void;
}

export default function Lightbox({ images, onClose }: LightboxProps) {
  const [index, setIndex] = useState(0);
  const hasMultiple = !!images && images.length > 1;

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!images) return;
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!images) return;
    setIndex((i) => (i + 1) % images.length);
  };

  const handleClose = () => {
    setIndex(0);
    onClose();
  };

  return (
    <AnimatePresence>
      {images && images.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <motion.button
            className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 transition-colors rounded-full"
            onClick={handleClose}
          >
            <X className="w-8 h-8" />
          </motion.button>

          {hasMultiple && (
            <>
              <button
                onClick={goPrev}
                aria-label="Foto anterior"
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 transition-colors rounded-full"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={goNext}
                aria-label="Próxima foto"
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 transition-colors rounded-full"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs font-bold tracking-widest">
                {index + 1} / {images.length}
              </div>
            </>
          )}

          <motion.img
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            src={images[index]}
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
