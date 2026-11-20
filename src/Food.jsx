import { ForkIcon, GherkinIcon, KnifeIcon, PastaIcon, PlateIcon, SushiIcon } from './FoodIcons.jsx';

// Ranked favourites, arranged on the plate. x and y are the centre of each food as a
// percentage of the plate.
const foods = [
  { name: 'Sushi', Icon: SushiIcon, x: 50, y: 32 },
  { name: 'Gherkins', Icon: GherkinIcon, x: 32, y: 64 },
  { name: 'Pasta', Icon: PastaIcon, x: 68, y: 64 },
];

export default function Food() {
  return (
    <div className="food">
      <h1 className="page-title rise" style={{ '--delay': '0.1s' }}>
        Food
      </h1>
      <p className="page-description rise" style={{ '--delay': '0.25s' }}>
        My favourite foods
      </p>
      <div className="place-setting">
        <ForkIcon />
        <div className="plate">
          <PlateIcon />
          <ol className="plate-foods">
            {foods.map(({ name, Icon, x, y }, i) => (
              <li
                key={name}
                className="plate-food"
                tabIndex={0}
                style={{ '--x': `${x}%`, '--y': `${y}%`, '--i': i }}
              >
                <span className="plate-rank" aria-hidden="true">
                  {i + 1}
                </span>
                <Icon />
                <span className="plate-name">{name}</span>
              </li>
            ))}
          </ol>
        </div>
        <KnifeIcon />
      </div>
    </div>
  );
}
