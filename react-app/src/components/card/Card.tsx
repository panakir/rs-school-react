import './card.scss';
import { Component } from 'react';
import { Cards } from '../../interfaces/Card';

export class Card extends Component {
  constructor(props: Cards) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="card">
          <h4 className="card__title">{this.props.name}</h4>
          <ul className="card__info">
            <li className="card__item">{this.props.diameter}</li>
            <li className="card__item">{this.props.climate}</li>
            <li className="card__item">{this.props.gravity}</li>
            <li className="card__item">{this.props.population}</li>
          </ul>
        </div>
      </>
    );
  }
}
