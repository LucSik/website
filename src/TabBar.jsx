import { useEffect, useRef } from 'react';

export default function TabBar({ pages, active, onChange }) {
  const barRef = useRef(null);

  useEffect(() => {
    const centreActiveTab = () => {
      const bar = barRef.current;
      const tab = bar?.querySelector('.tab.active');
      if (!bar || !tab || bar.scrollWidth <= bar.clientWidth) return;
      bar.scrollLeft = tab.offsetLeft - (bar.clientWidth - tab.offsetWidth) / 2;
    };
    centreActiveTab();
    window.addEventListener('resize', centreActiveTab);
    return () => window.removeEventListener('resize', centreActiveTab);
  }, [active]);

  return (
    <nav ref={barRef} className="tab-bar" aria-label="Pages">
      {pages.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          className={id === active ? 'tab active' : 'tab'}
          aria-current={id === active ? 'page' : undefined}
          onClick={() => onChange(id)}
        >
          {Icon && <Icon />}
          {label}
        </button>
      ))}
    </nav>
  );
}
