import { useState } from 'react';
import useReveal from './useReveal.js';
import ScrollCue from './ScrollCue.jsx';
import SakuraPetal from './SakuraPetal.jsx';
import { WARWICK_URL } from './OrgLogos.jsx';

// Drifting sakura petals spread evenly across the screen, with varied size, speed and sway.
// Negative delays start petals part-way down so the page doesn't open empty.
const PETAL_COUNT = 28;
const fallingPetals = Array.from({ length: PETAL_COUNT }, (_, i) => {
  const wobble = (n) => ((i * n) % 11) / 11;
  return {
    x: -3 + (i * 106) / PETAL_COUNT + wobble(3) * 2,
    size: 20 + wobble(7) * 16,
    dur: 10 + wobble(3) * 8,
    delay: -wobble(9) * 18,
    sway: (i % 2 ? -1 : 1) * (30 + wobble(4) * 45),
  };
});

const LL391_URL = 'https://warwick.ac.uk/fac/arts/languagecentre/programmes/academic/japanese/ll391/';
const JLPT_URL = 'https://www.jlpt.jp/sp/e/about/levelsummary.html';

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

const content = {
  en: {
    title: 'Japanese',
    flagLabel: 'Flag of Japan',
    fireworksAlt:
      'Lucy smiling in a navy yukata with a white and blue flower pattern, with fireworks bursting in the night sky behind her',
    kimonoAlt:
      'Lucy in a lilac kimono with a white flower-patterned obi, sitting at a café table with two iced matcha drinks and a garden outside the window',
    body: (
      <>
        <p>
          I am interested in learning Japanese. I started studying 2 years ago, and started learning
          more seriously 1 year ago when I started the course{' '}
          <ExternalLink href={LL391_URL}>LL391</ExternalLink> at{' '}
          <ExternalLink href={WARWICK_URL}>The University of Warwick</ExternalLink>.
        </p>
        <p>
          Now, I practise a little every day so I don't forget my vocab. My goal is to pass the{' '}
          <ExternalLink href={JLPT_URL}>N2 JLPT</ExternalLink> and understand anime without
          subtitles.
        </p>
      </>
    ),
  },
  ja: {
    title: '日本語',
    flagLabel: '日本の国旗',
    fireworksAlt: '白と青の花柄の紺色の浴衣を着て笑っているルーシー。後ろの夜空に花火が上がっている。',
    kimonoAlt:
      '白い花柄の帯と薄紫の着物を着たルーシー。カフェのテーブルにアイス抹茶が二つあり、窓の外に庭が見える。',
    body: (
      <>
        <p>
          私は日本語を勉強することが好きです。二年前に始めました。一年前に、もっと勉強しました。
          <ExternalLink href={WARWICK_URL}>ウォーリック大学</ExternalLink>の日本語のクラス「
          <ExternalLink href={LL391_URL}>LL391</ExternalLink>」に参加しました。
        </p>
        <p>
          今、ちょっと練習します。言葉や漢字を忘れたくないです。将来、
          <ExternalLink href={JLPT_URL}>JLPTのN2試験</ExternalLink>
          に受かりたいです。そしたら、字幕なしでアニメが分かるようになりたいです。
        </p>
      </>
    ),
  },
};

function JapanFlag({ label, lang }) {
  return (
    <svg className="flag" viewBox="0 0 30 20" role="img" aria-label={label} lang={lang} focusable="false">
      <rect x="0.5" y="0.5" width="29" height="19" rx="3" className="flag-field" />
      <circle cx="15" cy="10" r="6" className="flag-sun" />
    </svg>
  );
}

function LanguageToggle({ lang, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={lang === 'ja'}
      aria-label="Show this page in Japanese"
      className={`lang-toggle glass ${lang}`}
      onClick={() => onChange(lang === 'en' ? 'ja' : 'en')}
    >
      <span className="lang-toggle-thumb" aria-hidden="true" />
      <span className={lang === 'en' ? 'lang-option active' : 'lang-option'}>EN</span>
      <span className={lang === 'ja' ? 'lang-option active' : 'lang-option'} lang="ja">
        日本語
      </span>
    </button>
  );
}

export default function Interest() {
  const [lang, setLang] = useState('ja');
  const text = content[lang];

  return (
    <div className="interest">
      <div className="sakura-rain" aria-hidden="true">
        {fallingPetals.map((p, i) => (
          <span
            key={i}
            className="sakura-fall"
            style={{ '--x': `${p.x}%`, '--s': `${p.size}px`, '--dur': `${p.dur}s`, '--d': `${p.delay}s`, '--sway': `${p.sway}px` }}
          >
            <SakuraPetal />
          </span>
        ))}
      </div>
      <div className="interest-toggle rise" style={{ '--delay': '0.2s' }}>
        <LanguageToggle lang={lang} onChange={setLang} />
      </div>

      <h1 className="interest-title rise" style={{ '--delay': '0.1s' }}>
        <JapanFlag label={text.flagLabel} lang={lang} />
        <span key={lang} lang={lang} className="lang-swap">
          {text.title}
        </span>
      </h1>

      <div className="interest-layout">
        <div className="interest-text glass rise" style={{ '--delay': '0.35s' }}>
          <div key={lang} lang={lang} className={`lang-swap interest-body ${lang}`}>
            {text.body}
          </div>
        </div>

        <img
          className="interest-photo photo-feature rise"
          style={{ '--delay': '0.5s' }}
          src="kimono_fireworks.jpg"
          alt={text.fireworksAlt}
          lang={lang}
        />
      </div>

      <FavouriteKanji lang={lang} photoAlt={text.kimonoAlt} />
    </div>
  );
}

const parts = [
  { kanji: '田', reading: 'た', meaning: 'Rice field' },
  { kanji: '心', reading: 'こころ', meaning: 'Heart' },
];

function FavouriteKanji({ lang, photoAlt }) {
  const ref = useReveal(0.2);

  return (
    <>
      <ScrollCue
        targetRef={ref}
        label="Scroll down to favourite kanji"
        text={lang === 'ja' ? 'スクロール' : 'Scroll down'}
        lang={lang}
      />
      <section ref={ref} className="kanji-section reveal">
        <img
          className="interest-photo kanji-photo"
          src="kimono.jpg"
          alt={photoAlt}
          lang={lang}
        />
  
        <div className="kanji-card glass">
          <h2 key={lang} lang={lang} className="kanji-heading lang-swap">
            {lang === 'ja' ? '好きな漢字' : 'Favourite kanji'}
          </h2>
  
          <p className="kanji-word" lang="ja">
            <ruby>
              思<rt>おも</rt>
            </ruby>
            う
          </p>
          <p className="kanji-meaning">To think, to consider, to feel</p>
  
          <ul className="kanji-parts">
            {parts.map((part, i) => (
              <li key={part.kanji} className="kanji-part" style={{ '--i': i }}>
                <span className="kanji-part-char" lang="ja">
                  <ruby>
                    {part.kanji}
                    <rt>{part.reading}</rt>
                  </ruby>
                </span>
                <span className="kanji-part-meaning">{part.meaning}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
