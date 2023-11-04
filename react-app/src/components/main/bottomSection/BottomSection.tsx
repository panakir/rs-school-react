import './bottomSection.scss';
import { SearchResults } from '../../../interfaces/interfaces';

export const BottomSection = (data: SearchResults): JSX.Element => {
  return (
    <div className="bottom-section">
      {data.searchResults.map((item, index) => (
        <div key={index} className="card">
          <h4 className="card__title">{item.name}</h4>
          <ul className="card__info">
            <li className="card__item">
              <span>Model: </span>
              {item.model}
            </li>
            <li className="card__item">
              <span>Starship class: </span>
              {item.starship_class}
            </li>
            <li className="card__item">
              <span>Number of passengers: </span>
              {item.passengers}
            </li>
            <li className="card__item">
              <span>Length of ship: </span> {item.length}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
