import './topSection.scss';
import { useContext } from 'react';
import { MainSectionContext } from '../../context/context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { setSearchValue } from '../../../store/searchValueSlice/searchValueSlice';

export const TopSection = (): JSX.Element => {
  const searchValue = useSelector(
    (state: RootState) => state.searchValue.searchValue
  );
  const dispatch = useDispatch();

  const { handleSearch } = useContext(MainSectionContext);

  const handleInputValue = (event: { target: { value: string } }): void => {
    dispatch(setSearchValue(event.target.value));
    localStorage.setItem('searchRequest', event.target.value);
  };

  const handleSearchButton = (): void => {
    handleSearch(searchValue);
  };

  return (
    <>
      <div className="top-section">
        <div className="search">
          <input
            type="text"
            className="input input_text search__input"
            onChange={handleInputValue}
            value={searchValue}
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
