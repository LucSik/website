import useReveal from './useReveal.js';
import ScrollCue from './ScrollCue.jsx';
import BloomFlower from './BloomFlower.jsx';
import FlowerField from './FlowerField.jsx';
import { SOFTWIRE_URL, SoftwireLogo, WARWICK_URL, WarwickLogo } from './OrgLogos.jsx';

function AnimatedWords({ words, startDelay }) {
  let index = 0;
  return words.map((word) => (
    <span key={word} className={word.startsWith('Lucy') ? 'word name' : 'word'} aria-hidden="true">
      {[...word].map((char) => {
        const delay = startDelay + index * 0.06;
        index += 1;
        return (
          <span key={index} className="letter" style={{ '--delay': `${delay}s` }}>
            {char}
          </span>
        );
      })}
    </span>
  ));
}

export default function Home() {
  const aboutRef = useReveal();

  return (
    <div className="home">
      <FlowerField
        flowers={flowers}
        avoid=".greeting .word"
        renderFlower={(flower) => <BloomFlower className={flower.small ? 'bloom-small' : ''} />}
      />

      <section className="hero">
        <div className="hero-photo glass rise" style={{ '--delay': '0.1s' }}>
          <img src="personal.jpg" alt="Lucy smiling at the camera, with long light-brown hair and a cream cable-knit jumper" />
        </div>
        <h1 className="greeting" aria-label="Hello, I'm Lucy!">
          <AnimatedWords words={['Hello,', "I'm", 'Lucy!']} startDelay={0.5} />
        </h1>
      </section>

      <ScrollCue targetRef={aboutRef} label="Scroll down to About me" />

      <div className="about-wrap">
        <section ref={aboutRef} className="about glass reveal">
          <div className="about-photo">
            <img
              src="graduation.jpg"
              alt="Lucy at her graduation in a cap and gown, holding a bouquet of pink roses and white chrysanthemums"
            />
          </div>
          <div className="about-text">
            <h2>About me</h2>
            <p>
              I grew up in Worcester, and became interested in programming in sixth form. That
              led me to the <a href={WARWICK_URL} target="_blank" rel="noopener noreferrer">University of Warwick</a>,
              where I studied Computer Science.
            </p>
            <p>
              Now, I'm a software developer at{' '}
              <a href={SOFTWIRE_URL} target="_blank" rel="noopener noreferrer">
                Softwire
              </a>{' '}
              in their London office!
            </p>
            <div className="org-logos">
              <a className="org-badge" href={WARWICK_URL} target="_blank" rel="noopener noreferrer">
                <WarwickLogo />
              </a>
              <a className="org-badge" href={SOFTWIRE_URL} target="_blank" rel="noopener noreferrer">
                <SoftwireLogo />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Positions are percentages of the home page area. Desktop (x, y) keeps clear of the
// greeting on the right of the hero; mobile (mx, my) keeps clear of it below the photo.
const flowers = [
  { x: -16, y: 1, mx: -14, my: 3, size: 210, msize: 120, small: false },
  { x: 62, y: 3, mx: 72, my: 1, size: 120, msize: 90, small: true },
  { x: 90, y: 6, mx: 82, my: 22, size: 150, msize: 100, small: true },
  { x: -20, y: 33, mx: -16, my: 48, size: 160, msize: 110, small: true },
  { x: 94, y: 40, mx: 84, my: 50, size: 230, msize: 120, small: false },
  { x: 44, y: 50, mx: -12, my: 60, size: 130, msize: 90, small: true },
  { x: -14, y: 72, mx: 80, my: 76, size: 190, msize: 110, small: false },
  { x: 86, y: 84, mx: -10, my: 90, size: 170, msize: 100, small: true },
];
