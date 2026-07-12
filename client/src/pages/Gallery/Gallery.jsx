import { useState, useMemo } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import projects from '../../data/projects';
import './Gallery.css';

const FILTERS = [{ slug: 'all', title: 'All' }, ...projects.map((p) => ({ slug: p.slug, title: p.title }))];

function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const items = useMemo(() => {
    const source = filter === 'all' ? projects : projects.filter((p) => p.slug === filter);
    return source.flatMap((project) =>
      (project.images.length ? project.images : [null, null]).map((img, i) => ({
        src: img ? `/images/projects/${project.folder}/${img}` : null,
        label: `${project.title} photo ${i + 1}`,
      }))
    );
  }, [filter]);

  return (
    <section className="section gallery-page">
      <div className="container">
        <span className="eyebrow">See us in action</span>
        <h1 className="underline-accent">Photo Gallery</h1>
        <p className="gallery-page__lead">
          Moments from our projects across Bamenda. Add your own photos to any project folder
          in <code>/public/images/projects/</code> and they'll appear here automatically.
        </p>

        <div className="gallery-filters">
          {FILTERS.map((f) => (
            <button
              key={f.slug}
              className={`gallery-filter ${filter === f.slug ? 'is-active' : ''}`}
              onClick={() => setFilter(f.slug)}
            >
              {f.title}
            </button>
          ))}
        </div>

        <Gallery items={items} />
      </div>
    </section>
  );
}

export default GalleryPage;
