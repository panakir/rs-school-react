import './topSection.scss';
import { useContext, useState } from 'react';
import { MainSectionContext } from '../../context/context';

export const TopSection = (): JSX.Element => {
  const { handleSearch } = useContext(MainSectionContext);
  const [searchInput, setSearchInput] = useState(
    localStorage.getItem('searchRequest') || ''
  );

  const handleInputValue = (event: { target: { value: string } }): void => {
    setSearchInput(event.target.value);
  };

  // TODO: think about checked value
  const handleSearchButton = (): void => {
    searchInput ? handleSearch(searchInput) : handleSearch('');
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
