import { useState } from 'react';
import Home from './Home.jsx';
import Programming from './Programming.jsx';
import Food from './Food.jsx';
import Interest from './Interest.jsx';
import TabBar from './TabBar.jsx';
import Gallery from './Gallery.jsx';
import { BubbleTeaIcon, CodeIcon, FrameIcon, HouseIcon, ToriiIcon } from './TabIcons.jsx';

const pages = [
  { id: 'home', label: 'Home', icon: HouseIcon, component: Home },
  { id: 'programming', label: 'Programming', icon: CodeIcon, component: Programming },
  { id: 'food', label: 'Food', icon: BubbleTeaIcon, component: Food },
  { id: 'japanese', label: 'Japanese', icon: ToriiIcon, component: Interest },
  { id: 'gallery', label: 'Gallery', icon: FrameIcon, component: Gallery },
];

export default function App() {
  const [active, setActive] = useState('home');
  const Page = pages.find((p) => p.id === active).component;

  const changePage = (id) => {
    if (id === active) return;
    window.scrollTo({ top: 0 });
    setActive(id);
  };

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <span className="orb orb-one" />
        <span className="orb orb-two" />
        <span className="orb orb-three" />
      </div>
      <main key={active} className="page">
        <Page />
      </main>
      <TabBar pages={pages} active={active} onChange={changePage} />
    </>
  );
}
