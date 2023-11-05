import { useNavigate } from 'react-router';
import { Starship } from '../../interfaces/interfaces';
import { useSearchParams } from 'react-router-dom';

interface Props {
  starship: Starship;
}

export const StarshipCard = ({ starship }: Props): JSX.Element => {
  const navigation = useNavigate();
  const [searchParams] = useSearchParams();
  const { model, name, starship_class, passengers, length } = starship;

  return (
    <div
      className="card"
      onClick={(): void => navigation(`/starships/${name}?${searchParams}`)}
    >
      <h4 className="card__title">{name}</h4>
      <ul className="card__info">
        <li className="card__item">
          <span>Model: </span>
          {model}
        </li>
        <li className="card__item">
          <span>Starship class: </span>
          {starship_class}
        </li>
        <li className="card__item">
          <span>Number of passengers: </span>
          {passengers}
        </li>
        <li className="card__item">
          <span>Length of ship: </span> {length}
        </li>
      </ul>
    </div>
  );
};
