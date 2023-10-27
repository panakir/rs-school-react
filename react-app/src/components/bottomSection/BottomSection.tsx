import './bottomSection.scss';
import { Card } from '../card/Card';
import { Component } from 'react';

export class BottomSection extends Component {
  render() {
    return (
      <div className="bottom-section">
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
