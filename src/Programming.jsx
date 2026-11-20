import Logo from './Logo.jsx';
import CodeRain from './CodeRain.jsx';
import useReveal from './useReveal.js';

const previouslyUsed = [
  { name: 'Java', logos: ['java'] },
  { name: 'Python', logos: ['python'] },
  { name: 'Kotlin', logos: ['kotlin'] },
  { name: 'HTML / CSS', logos: ['html', 'css'] },
  { name: 'SQL', logos: ['sql'] },
  { name: 'C#', logos: ['csharp'] },
  { name: 'C', logos: ['c'] },
  { name: 'Lua', logos: ['lua'] },
  { name: 'Haskell', logos: ['haskell'] },
];

const learning = [
  { name: 'TypeScript', logos: ['typescript'] },
  { name: 'JavaScript', logos: ['javascript'] },
  { name: 'Ruby', logos: ['ruby'] },
  { name: 'C++', logos: ['cplusplus'] },
  { name: 'React', logos: ['react'] },
  { name: 'Angular', logos: ['angular'] },
];

function LanguageGroup({ title, items }) {
  const ref = useReveal(0.15);
  return (
    <section ref={ref} className="lang-group">
      <h2 className="group-title">{title}</h2>
      <ul className="lang-grid">
        {items.map((item, i) => (
          <li key={item.name} className="lang-card glass" tabIndex={0} style={{ '--i': i }}>
            <span className="logo-row">
              {item.logos.map((id) => (
                <Logo key={id} id={id} />
              ))}
            </span>
            <span className="lang-name">{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Programming() {
  return (
    <div className="programming">
      <CodeRain />
      <h1 className="page-title rise" style={{ '--delay': '0.1s' }}>
        Programming
      </h1>
      <div className="lang-columns">
        <LanguageGroup title="Previously used" items={previouslyUsed} />
        <span className="lang-divider" aria-hidden="true" />
        <LanguageGroup title="Learning" items={learning} />
      </div>
    </div>
  );
}
