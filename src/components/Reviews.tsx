import { Star } from 'lucide-react';
import { GOOGLE_RATING, GOOGLE_REVIEWS } from '../data/content';
import GoogleIcon from './GoogleIcon';

function Stars({ rating, className = '' }: { rating: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const loopedReviews = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

  return (
    <section id="reviews" className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Avaliações</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tighter">
              O que nossos clientes dizem.
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <GoogleIcon className="w-9 h-9 shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-display font-black text-slate-900">{GOOGLE_RATING.average}</span>
                <Stars rating={5} />
              </div>
              <p className="text-xs text-slate-500 font-medium">{GOOGLE_RATING.count} avaliações no Google</p>
            </div>
          </div>
        </div>
      </div>

      <div className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max gap-8 animate-marquee">
          {loopedReviews.map((review, idx) => (
            <div
              key={`${review.name}-${idx}`}
              className="w-[320px] md:w-[360px] shrink-0 bg-white rounded-2xl shadow-lg p-8 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 ${review.color}`}>
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-400">{review.date}</p>
                </div>
              </div>
              <Stars rating={review.rating} className="mb-4" />
              <p className="text-sm text-slate-600 leading-relaxed flex-1">{review.text}</p>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <GoogleIcon className="w-3.5 h-3.5" />
                Avaliado no Google
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
