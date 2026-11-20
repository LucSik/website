const OUTER_PETAL = 'M0 0C-20-18-27-62 0-94 27-62 20-18 0 0z';
const INNER_PETAL = 'M0 0C-15-14-19-46 0-68 19-46 15-14 0 0z';
const HEART_PETAL = 'M0 0C-9-8-11-26 0-38 11-26 9-8 0 0z';

function petals(count, offset, delay, step) {
  return Array.from({ length: count }, (_, i) => ({
    angle: offset + (360 / count) * i,
    delay: delay + i * step,
  }));
}

const layers = [
  { id: 'outer', path: OUTER_PETAL, fill: 'url(#petal-outer)', items: petals(10, 0, 0.35, 0.07) },
  { id: 'inner', path: INNER_PETAL, fill: 'url(#petal-inner)', items: petals(8, 22.5, 0.95, 0.07) },
  { id: 'heart', path: HEART_PETAL, fill: 'url(#petal-heart)', items: petals(6, 0, 1.45, 0.06) },
];

export default function BloomFlower({ className = '' }) {
  return (
    <svg className={`bloom ${className}`} viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="petal-outer" cx="0" cy="0" r="94" gradientUnits="userSpaceOnUse">
          <stop offset="0.15" stopColor="#ec8fa6" />
          <stop offset="1" stopColor="#fbd3dc" />
        </radialGradient>
        <radialGradient id="petal-inner" cx="0" cy="0" r="68" gradientUnits="userSpaceOnUse">
          <stop offset="0.1" stopColor="#e57793" />
          <stop offset="1" stopColor="#f6b6c6" />
        </radialGradient>
        <radialGradient id="petal-heart" cx="0" cy="0" r="38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d9617f" />
          <stop offset="1" stopColor="#f0a0b4" />
        </radialGradient>
      </defs>

      <g className="bloom-spin">
        {layers.map((layer) => (
          <g key={layer.id}>
            {layer.items.map(({ angle, delay }) => (
              <path
                key={angle}
                className="petal"
                d={layer.path}
                fill={layer.fill}
                style={{ '--angle': `${angle}deg`, '--delay': `${delay}s` }}
              />
            ))}
          </g>
        ))}
        <g className="bloom-centre">
          <circle r="11" fill="#f7d58a" />
          <circle r="6" fill="#f2bf5e" />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <circle
              key={a}
              r="1.6"
              cx={Math.cos((a * Math.PI) / 180) * 8.5}
              cy={Math.sin((a * Math.PI) / 180) * 8.5}
              fill="#e9a944"
            />
          ))}
        </g>
      </g>
    </svg>
  );
}
