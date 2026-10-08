// MV monogram: V is nested inside the M, both drawn with the same stroke weight.
export default function Logo({ size = 32, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Gurunath Meharwade, MV monogram"
      className={className}
    >
      <polyline
        points="14,84 14,16 50,58 86,16 86,84"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      />
      <polyline
        points="31,52 50,84 69,52"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
