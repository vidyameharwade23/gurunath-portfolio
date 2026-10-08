// Logo lockup styled after "Option 9": a gold M with a stacked wordmark
// underneath — MEHARWADE on top, PROPERTIES below it flanked by short
// gold rules. No background card — sits directly on the page.
export default function BrandMark({ className = "", scale = 1 }) {
  const iconPx = Math.round(72 * scale);
  return (
    <div className={`inline-flex flex-col items-center text-center ${className}`}>
      <svg width={iconPx} height={iconPx} viewBox="0 0 100 100" role="img" aria-label="Meharwade monogram">
        <defs>
          <linearGradient id="goldM" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F7DE9A" />
            <stop offset="45%" stopColor="#F5B800" />
            <stop offset="100%" stopColor="#B9820A" />
          </linearGradient>
        </defs>
        <path
          d="M12 86 L12 14 L50 56 L88 14 L88 86 L74 86 L74 34 L50 60 L26 34 L26 86 Z"
          fill="url(#goldM)"
        />
      </svg>
      <p className="display mt-3 tracking-[0.2em] text-ink" style={{ fontSize: `${1.125 * scale}rem` }}>MEHARWADE</p>
      <p className="mt-1 flex items-center gap-2 tracking-[0.35em] text-brand" style={{ fontSize: `${0.75 * scale}rem` }}>
        <span className="h-px w-4 bg-brand" aria-hidden="true" />
        PROPERTIES
        <span className="h-px w-4 bg-brand" aria-hidden="true" />
      </p>
    </div>
  );
}
