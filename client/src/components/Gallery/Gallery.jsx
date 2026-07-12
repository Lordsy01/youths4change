import { useState } from 'react';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import './Gallery.css';

/**
 * items: [{ src: string|null, label: string, alt?: string }]
 */
function Gallery({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((i) => (i + 1) % items.length);
  const prev = () => setActiveIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <button
            key={i}
            className="gallery-grid__cell"
            onClick={() => item.src && setActiveIndex(i)}
            aria-label={`View ${item.label}`}
          >
            <PlaceholderImage src={item.src} alt={item.alt || item.label} label={item.label} ratio="1 / 1" />
          </button>
        ))}
      </div>

      {activeIndex !== null && items[activeIndex].src && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="lightbox__close" aria-label="Close" onClick={close}>✕</button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>
          <img
            src={items[activeIndex].src}
            alt={items[activeIndex].alt || items[activeIndex].label}
            className="lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

export default Gallery;
