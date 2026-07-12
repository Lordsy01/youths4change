import { useEffect, useState } from 'react';
import slogans from '../../data/slogans';
import './SlogansBanner.css';

function SlogansBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slogans.length);
    }, 3600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="slogans-banner" role="status" aria-live="polite">
      <div className="slogans-banner__track">
        {slogans.map((s, i) => (
          <span key={s} className={`slogans-banner__item ${i === index ? 'is-active' : ''}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SlogansBanner;
