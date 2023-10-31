import './topSection.scss';
import {
  SearchInputProps,
  SearchInputState,
} from '../../interfaces/interfaces';
import { Component } from 'react';

export class TopSection extends Component<SearchInputProps, SearchInputState> {
  constructor(props: SearchInputProps) {
    super(props);
    this.state = {
      searchInput: localStorage.getItem('searchRequest') || '',
    };
  }

  handleInputValue = (event: { target: { value: string } }) => {
    this.setState({ searchInput: event.target.value });
  };

  handleSearchButton = () => {
    this.props.searchText(this.state.searchInput);
  };

  render() {
    const { searchInput } = this.state;

    return (
      <>
        <div className="top-section">
          <div className="search">
            <input
              type="text"
              className="input input_text search__input"
              onChange={this.handleInputValue}
              value={searchInput}
              placeholder="Enter the name of ship"
            />
            <button
              className="button button_search search__button"
              onClick={this.handleSearchButton}
            >
              search
            </button>
          </div>
        </div>
      </>
    );
  }
}
