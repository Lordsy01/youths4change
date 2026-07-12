import './PlaceholderImage.css';

/**
 * Renders a real image if `src` is provided, otherwise a styled placeholder
 * so the layout still looks intentional before real photos are added.
 * Usage: <PlaceholderImage src={project.images[0] ? `/images/projects/${project.folder}/${project.images[0]}` : null} label={project.title} />
 */
function PlaceholderImage({ src, alt = '', label = 'Photo', ratio = '4 / 3', className = '' }) {
  if (src) {
    return (
      <div className={`ph-image ${className}`} style={{ aspectRatio: ratio }}>
        <img src={src} alt={alt} />
      </div>
    );
  }

  return (
    <div className={`ph-image ph-image--empty ${className}`} style={{ aspectRatio: ratio }}>
      <span className="ph-image__icon" aria-hidden="true">📷</span>
      <span className="ph-image__label">{label}</span>
    </div>
  );
}

export default PlaceholderImage;
