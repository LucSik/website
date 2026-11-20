// A single cherry blossom petal with the notched tip sakura petals have.
const PETAL = 'M0 0C-17-10-25-33-13-47Q-8-53-3-50L0-43 3-50Q8-53 13-47C25-33 17-10 0 0z';

export default function SakuraPetal() {
  return (
    <svg className="sakura-petal" viewBox="-20 -56 40 58" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="sakura-petal-fill" x1="0" y1="0" x2="0" y2="-52" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ee90ad" />
          <stop offset="1" stopColor="#fcd3df" />
        </linearGradient>
      </defs>
      <path d={PETAL} fill="url(#sakura-petal-fill)" />
    </svg>
  );
}
