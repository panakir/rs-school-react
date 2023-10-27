import './topSection.scss';
import { Component } from 'react';

export class TopSection extends Component {
  render() {
    return (
      <>
        <div className="top-section">
          <div className="search">
            <input type="text" className="input input_text search__input" />
            <button className="button button_search search__button">
              search
            </button>
          </div>
        </div>
      </>
    );
  }
}
