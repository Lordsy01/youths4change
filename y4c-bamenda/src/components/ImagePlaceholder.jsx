import '../styles/imagePlaceholder.css'

/**
 * ImagePlaceholder
 * -----------------
 * Marks a spot where a real photo should be dropped in later.
 *
 * HOW TO REPLACE WITH A REAL IMAGE:
 * 1. Put your photo file in:  src/assets/images/
 * 2. Import it at the top of the page file, e.g.
 *      import empowerHerPhoto from '../../assets/images/empowerher-1.jpg'
 * 3. Swap the <ImagePlaceholder /> tag for:
 *      <img src={empowerHerPhoto} alt="Describe the photo here" className="photo" />
 *
 * `label` = short name for this spot (shows in the placeholder + as a comment)
 * `note`  = optional hint about what kind of photo belongs here
 * `ratio` = aspect ratio box: "square" | "wide" | "tall" (default "wide")
 */
export default function ImagePlaceholder({ label = 'Image', note = '', ratio = 'wide' }) {
  return (
    // IMAGE SPOT: {label} — {note}
    <div className={`img-placeholder img-placeholder--${ratio}`} role="img" aria-label={`${label} placeholder`}>
      <div className="img-placeholder__inner">
        <span className="img-placeholder__icon" aria-hidden="true">🖼</span>
        <span className="img-placeholder__label">{label}</span>
        {note && <span className="img-placeholder__note">{note}</span>}
      </div>
    </div>
  )
}
