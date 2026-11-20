import { useEffect, useRef } from 'react';

// Pink "digital rain" of falling binary, drawn behind the Programming page.
//
// Kept light for smooth playback:
// - one canvas, capped at 1.5x pixel density, with no blur filters
// - depth comes from size, speed and transparency (far columns are small and faint)
// - columns are grouped by font size so the font is only switched a few times per frame
// - updates at ~30 frames per second, which still reads as smooth falling code
// - requestAnimationFrame pauses automatically while the browser tab is hidden

const HEAD_COLOUR = '#c2476e';
const TRAIL_COLOUR = '#e07b9c';
const COLUMN_GAP = 18;
const FRAME_MS = 1000 / 30;
const MAX_RATIO = 1.5;
const SIZES = [9, 11, 13, 15, 17, 20];

const between = (min, max) => min + Math.random() * (max - min);
const randomBit = () => (Math.random() < 0.5 ? '0' : '1');

function makeColumn(x, height, startAnywhere) {
  const depth = Math.random();
  const size = SIZES[Math.min(SIZES.length - 1, Math.floor(depth * SIZES.length))];
  const length = Math.round(between(10, 32));
  return {
    x,
    size,
    length,
    speed: between(40, 70) + depth * 90,
    alpha: 0.18 + depth * 0.65,
    head: startAnywhere ? between(-height * 0.5, height) : between(-height * 0.6, -20),
    bits: Array.from({ length }, randomBit),
  };
}

export default function CodeRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let columns = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let last = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, MAX_RATIO);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.textAlign = 'center';
      columns = [];
      for (let x = COLUMN_GAP / 2; x < width; x += COLUMN_GAP) {
        if (Math.random() < 0.88) columns.push(makeColumn(x + between(-4, 4), height, true));
      }
      // Small (far) columns first so larger ones draw on top, and grouped by font size.
      columns.sort((a, b) => a.size - b.size);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      let currentSize = 0;
      for (const col of columns) {
        if (col.size !== currentSize) {
          currentSize = col.size;
          ctx.font = `600 ${currentSize}px ui-monospace, Consolas, monospace`;
        }
        const step = col.size * 1.15;
        for (let k = 0; k < col.length; k += 1) {
          const y = col.head - k * step;
          if (y < -step || y > height + step) continue;
          ctx.globalAlpha = col.alpha * (1 - k / col.length) ** 1.3;
          ctx.fillStyle = k === 0 ? HEAD_COLOUR : TRAIL_COLOUR;
          ctx.fillText(col.bits[k], col.x, y);
        }
      }
      ctx.globalAlpha = 1;
    };

    const update = (dt) => {
      for (let i = 0; i < columns.length; i += 1) {
        const col = columns[i];
        col.head += col.speed * dt;
        if (Math.random() < 0.08) col.bits[Math.floor(Math.random() * col.length)] = randomBit();
        if (col.head - col.length * col.size * 1.15 > height) {
          const fresh = makeColumn(col.x, height, false);
          fresh.size = col.size;
          fresh.alpha = col.alpha;
          columns[i] = fresh;
        }
      }
    };

    const tick = (now) => {
      frame = requestAnimationFrame(tick);
      if (!last) last = now;
      const elapsed = now - last;
      if (elapsed < FRAME_MS) return;
      last = now;
      update(Math.min(elapsed / 1000, 0.1));
      draw();
    };

    const onResize = () => {
      resize();
      draw();
    };

    resize();
    draw();
    window.addEventListener('resize', onResize);
    if (!reduceMotion) frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="code-rain" aria-hidden="true" />;
}
