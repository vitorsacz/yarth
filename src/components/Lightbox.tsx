import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

interface LightboxProps {
  selectedImage: string | null;
  onClose: () => void;
}

export default function Lightbox({ selectedImage, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <motion.button
            className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 transition-colors rounded-full"
            onClick={onClose}
          >
            <X className="w-8 h-8" />
          </motion.button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            src={selectedImage}
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
