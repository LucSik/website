import { useEffect, useRef } from 'react';
import useReveal from './useReveal.js';

// Background layer of flowers that bloom as they scroll into view.
// Positions are percentages of the page area: (x, y) on wide screens, (mx, my) on phones.
// Any flower that would sit behind an element matching `avoid` is hidden.

function FieldFlower({ flower, index, renderFlower }) {
  const ref = useReveal(0.3);
  const { x, y, mx, my, size, msize } = flower;
  return (
    <span
      ref={ref}
      className="field-flower bloom-on-reveal"
      style={{
        '--x': `${x}%`,
        '--y': `${y}%`,
        '--mx': `${mx}%`,
        '--my': `${my}%`,
        '--size': `${size}px`,
        '--msize': `${msize}px`,
        '--stagger': `${(index % 4) * 0.25}s`,
      }}
    >
      {renderFlower(flower)}
    </span>
  );
}

function useKeepClear(fieldRef, avoid) {
  useEffect(() => {
    const field = fieldRef.current;
    if (!field || !avoid) return undefined;

    const update = () => {
      const margin = 16;
      const zones = [...document.querySelectorAll(avoid)].map((el) => {
        // Headings and paragraphs are often full-width blocks, so measure just their text.
        let r = el.getBoundingClientRect();
        if (el.matches('h1, h2, h3, p')) {
          const range = document.createRange();
          range.selectNodeContents(el);
          r = range.getBoundingClientRect();
        }
        return { left: r.left - margin, right: r.right + margin, top: r.top - margin, bottom: r.bottom + margin };
      });
      field.querySelectorAll('.field-flower').forEach((flower) => {
        const r = flower.getBoundingClientRect();
        const inset = r.width * 0.06;
        const clash = zones.some(
          (z) => r.left + inset < z.right && r.right - inset > z.left && r.top + inset < z.bottom && r.bottom - inset > z.top
        );
        flower.classList.toggle('clash', clash);
      });
    };

    update();
    document.fonts?.ready.then(update);
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, [fieldRef, avoid]);
}

export default function FlowerField({ flowers, renderFlower, avoid, className = '', children }) {
  const fieldRef = useRef(null);
  useKeepClear(fieldRef, avoid);

  return (
    <div ref={fieldRef} className={`flower-field ${className}`} aria-hidden="true">
      {flowers.map((flower, index) => (
        <FieldFlower key={`${flower.x}-${flower.y}`} flower={flower} index={index} renderFlower={renderFlower} />
      ))}
      {children}
    </div>
  );
}
