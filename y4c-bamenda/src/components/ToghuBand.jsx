import '../styles/toghuBand.css'

/**
 * ToghuBand
 * ---------
 * A thin repeating geometric strip inspired by the embroidery on Toghu,
 * the black-and-gold ceremonial dress associated with Bamenda and the
 * wider Grassfields region. It's used as a recurring "stitch" that ties
 * every page back to the organization's home place — instead of a
 * generic divider line.
 *
 * Usage: <ToghuBand /> or <ToghuBand tone="light" />
 */
export default function ToghuBand({ tone = 'dark' }) {
  return (
    <div className={`toghu-band toghu-band--${tone}`} role="presentation" aria-hidden="true">
      <svg
        className="toghu-band__svg"
        viewBox="0 0 240 24"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="toghuMotif" width="24" height="24" patternUnits="userSpaceOnUse">
            <rect width="24" height="24" fill="transparent" />
            {/* diamond / sun motif, echoing Toghu embroidery */}
            <path d="M12 3 L18 12 L12 21 L6 12 Z" className="toghu-band__diamond" />
            <circle cx="12" cy="12" r="2.2" className="toghu-band__dot" />
          </pattern>
        </defs>
        <rect width="240" height="24" fill="url(#toghuMotif)" />
      </svg>
    </div>
  )
}
