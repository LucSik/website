export function PlateIcon() {
  return (
    <svg className="plate-svg" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="plate-well" cx="0.45" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f7f2f1" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="196" fill="#fbf8f7" stroke="#e9e1df" strokeWidth="2" />
      <circle cx="200" cy="200" r="178" fill="none" stroke="#f2cdd8" strokeWidth="3" />
      <circle cx="200" cy="200" r="150" fill="url(#plate-well)" stroke="#ece5e3" strokeWidth="2" />
      <path d="M92 132a128 128 0 0 1 78-58" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
    </svg>
  );
}

export function ForkIcon() {
  return (
    <svg className="cutlery cutlery-fork" viewBox="0 0 40 300" aria-hidden="true" focusable="false">
      <path d="M10 10v52M20 10v52M30 10v52" fill="none" stroke="#aeb6c1" strokeWidth="7" strokeLinecap="round" />
      <path d="M6 56h28c0 22-7 36-14 36S6 78 6 56z" fill="#aeb6c1" />
      <path d="M20 88v70" fill="none" stroke="#aeb6c1" strokeWidth="8" strokeLinecap="round" />
      <rect x="12" y="150" width="16" height="146" rx="8" fill="#9aa3ad" />
      <path d="M17 168v108" fill="none" stroke="#c5ccd5" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function KnifeIcon() {
  return (
    <svg className="cutlery cutlery-knife" viewBox="0 0 40 300" aria-hidden="true" focusable="false">
      <path d="M14 8c0-3 2-4 4-3 10 6 15 34 14 72-1 30-2 54-2 77H14z" fill="#c3cad3" />
      <path d="M19 26v100" fill="none" stroke="#e3e7ec" strokeWidth="3" strokeLinecap="round" />
      <rect x="12" y="150" width="17" height="146" rx="8.5" fill="#9aa3ad" />
      <path d="M17 168v108" fill="none" stroke="#c5ccd5" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function SushiIcon() {
  return (
    <svg className="food-icon" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect x="9" y="33" width="46" height="19" rx="9.5" fill="#fffdf7" stroke="#e8dccb" strokeWidth="1.2" />
      <circle cx="16" cy="45" r="1" fill="#efe5d6" />
      <circle cx="47" cy="47" r="1" fill="#efe5d6" />
      <circle cx="21" cy="49" r="0.9" fill="#efe5d6" />
      <path d="M6 33c0-8 12-13 26-13s26 5 26 12c0 4-3 6-7 6H13c-4 0-7-2-7-5z" fill="#f7845e" />
      <path
        d="M17 24.5c3 3 4 7 4 11M28 21.5c3 3.5 4 8 4 14M40 22c3 3.5 4 8 4 13.5"
        fill="none"
        stroke="#ffd9c7"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="27" y="19" width="10" height="34" rx="2.5" fill="#1f3329" />
    </svg>
  );
}

export function GherkinIcon() {
  return (
    <svg className="food-icon" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M51 11.5 55 5.5" fill="none" stroke="#7a5a2f" strokeWidth="3.2" strokeLinecap="round" />
      <path
        d="M11 52c-5-5-3-12 3-17 4-3 6-4 9-8 3-4 5-9 9-12 6-5 13-7 18-5 5 3 4 10 0 15-3 4-6 6-9 10s-5 8-9 11c-7 6-15 11-21 6z"
        fill="#5f8a2e"
      />
      <path
        d="M17 38c5-4 8-7 11-12 3-4 6-8 11-10"
        fill="none"
        stroke="#9cc25a"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <g fill="#b7d77a">
        <circle cx="16" cy="47" r="1.9" />
        <circle cx="24" cy="41" r="1.9" />
        <circle cx="31" cy="34" r="1.9" />
        <circle cx="38" cy="27" r="1.9" />
        <circle cx="45" cy="20" r="1.9" />
        <circle cx="27" cy="47" r="1.6" />
        <circle cx="44" cy="29" r="1.6" />
      </g>
    </svg>
  );
}

export function PastaIcon() {
  return (
    <svg className="food-icon" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M42 33 51 7" fill="none" stroke="#9aa3ad" strokeWidth="3.2" strokeLinecap="round" />
      <path
        d="M47.5 6.5 49 2M51 7.5l1.5-4.5M54.5 8.5 56 4"
        fill="none"
        stroke="#9aa3ad"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M12 35c1-11 9-16 20-16s19 5 20 16z" fill="#f4d27a" />
      <path
        d="M16 32c3-6 7-9 12-6s6 7 11 4 7-3 9 1M21 26c4-4 9-4 13 0s9 3 11 1"
        fill="none"
        stroke="#d9a93f"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M22 27c2-4 9-5 13-2 3 2 1 6-4 6.5-5 .5-10-.5-9-4.5z" fill="#d9442b" />
      <circle cx="27" cy="25.5" r="1.3" fill="#f2785e" />
      <circle cx="31.5" cy="28" r="1" fill="#f2785e" />
      <path d="M7 34h50c0 11-11 19-25 19S7 45 7 34z" fill="#4f7cac" />
      <path d="M10.5 38h43" fill="none" stroke="#7aa3cf" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 58h20" fill="none" stroke="#3d6390" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}
