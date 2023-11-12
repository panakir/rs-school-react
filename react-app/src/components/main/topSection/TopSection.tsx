import './topSection.scss';
import { SearchInputProps } from '../../../interfaces/interfaces';
import { useState } from 'react';

export const TopSection = (searchText: SearchInputProps): JSX.Element => {
  const [searchInput, setSearchInput] = useState(
    localStorage.getItem('searchRequest') || ''
  );

  const handleInputValue = (event: { target: { value: string } }): void => {
    setSearchInput(event.target.value);
  };

  const handleSearchButton = (): void => {
    searchInput
      ? searchText.searchText(searchInput)
      : searchText.searchText('');
  };

  return (
    <>
      <div className="top-section">
        <div className="search">
          <input
            type="text"
            className="input input_text search__input"
            onChange={handleInputValue}
            value={searchInput ? searchInput : ''}
            placeholder="Enter the name of ship"
          />
          <button
            className="button button_search search__button"
            onClick={handleSearchButton}
          >
            search
          </button>
        </div>
      </div>
    </>
  );
};
