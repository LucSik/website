import { useEffect, useState } from 'react';

export default function ScrollCue({ targetRef, label, text = 'Scroll down', lang = 'en' }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const update = () => setHidden(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const scrollToTarget = () => {
    const target = targetRef.current;
    if (!target) return;
    const startY = window.scrollY;
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      if (window.scrollY === startY) target.scrollIntoView({ block: 'center' });
    }, 400);
  };

  return (
    <button
      type="button"
      className={hidden ? 'scroll-cue hidden' : 'scroll-cue'}
      aria-label={label}
      tabIndex={hidden ? -1 : 0}
      onClick={scrollToTarget}
    >
      <span lang={lang}>{text}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6 9.5l6 6 6-6" />
      </svg>
    </button>
  );
}
