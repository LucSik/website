import { useEffect, useRef, useState } from 'react';

// Hand-drawn journal artwork. `ratio` is width / height, used to lay the pieces out in a
// row of equal height on wide screens.
const artworks = [
  {
    src: 'gallery-2026-cover.webp',
    ratio: 4 / 3,
    alt: 'Journal page with "2026" written in a pink box, surrounded by hand-drawn plum pink asters and peach poppies on tall stems',
  },
  {
    src: 'gallery-2026-calendar.webp',
    ratio: 4 / 3,
    alt: 'Hand-lettered 2026 calendar spread showing January to October, with a border of plum asters and peach poppies along the bottom',
  },
  {
    src: 'gallery-november.webp',
    ratio: 3 / 4,
    alt: 'November journal spread with two hand-drawn orange pumpkins, deep red dahlias and green leaves, beside a small November calendar',
  },
  {
    src: 'gallery-moon-portrait.webp',
    ratio: 1333 / 2000,
    alt: 'Digital painting of a girl with long golden hair in twin buns and pigtails, blue eyes and crescent-moon earrings and necklace, resting a pink-nailed finger on her chin against a pale blue background',
  },
  {
    src: 'gallery-pear-girl.webp',
    ratio: 3 / 4,
    alt: 'Painting on canvas of a green pear with an anime-style face, magenta eyes and curly pink drill-curl hair, casting a grey shadow on a cream background',
  },
];

// Splits the artwork into two columns whose heights are as even as possible (each piece's
// height at a fixed width is 1 / ratio), keeping the original order within each column.
// Fine for a small gallery: it simply tries every split.
function balanceColumns(items) {
  let best = null;
  for (let mask = 0; mask < 1 << items.length; mask += 1) {
    const cols = [[], []];
    const heights = [0, 0];
    items.forEach((item, i) => {
      const c = (mask >> i) & 1;
      cols[c].push(i);
      heights[c] += 1 / item.ratio;
    });
    const diff = Math.abs(heights[0] - heights[1]);
    if (!best || diff < best.diff) best = { diff, cols };
  }
  // The column holding the first piece goes on the left.
  return best.cols[0].includes(0) ? best.cols : [best.cols[1], best.cols[0]];
}

const columns = balanceColumns(artworks);

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open !== null && !dialog.open) dialog.showModal();
    if (open === null && dialog.open) dialog.close();
  }, [open]);

  const art = open !== null ? artworks[open] : null;

  return (
    <div className="gallery">
      <h1 className="page-title rise" style={{ '--delay': '0.1s' }}>
        Gallery
      </h1>

      <div className="gallery-columns">
        {columns.map((column, c) => (
          <ul key={c} className="gallery-column">
            {column.map((i) => {
              const item = artworks[i];
              return (
                <li key={item.src} className="gallery-item" style={{ '--ratio': item.ratio, '--i': i }}>
                  <button type="button" className="gallery-frame" onClick={() => setOpen(i)}>
                    <img src={item.src} alt={item.alt} loading="lazy" />
                    <span className="sr-only">Open larger view</span>
                  </button>
                </li>
              );
            })}
          </ul>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="gallery-lightbox"
        aria-label="Artwork"
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
      >
        {art && (
          <figure className="lightbox-figure">
            <img src={art.src} alt={art.alt} />
            <button type="button" className="lightbox-close" onClick={() => setOpen(null)} aria-label="Close">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </figure>
        )}
      </dialog>
    </div>
  );
}
