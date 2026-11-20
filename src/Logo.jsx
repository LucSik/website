import { logos } from './logos.js';

export default function Logo({ id, className = 'logo' }) {
  const { viewBox, paths, fills, color } = logos[id];
  return (
    <svg className={className} viewBox={viewBox} aria-hidden="true" focusable="false">
      {paths.map((d, i) => (
        <path key={d.slice(0, 24)} d={d} fill={fills?.[i] ?? color} />
      ))}
    </svg>
  );
}
