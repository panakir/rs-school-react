import { useContext } from 'react';
import './pagination.scss';
import { NavLink } from 'react-router-dom';
import { MainSectionContext } from '../context/context';

export const Pagination = (): JSX.Element => {
  const { resultsOnPage, countAllResults, setCurrentPage } =
    useContext(MainSectionContext);
  const pagesCount = Math.ceil(countAllResults / resultsOnPage);
  const numbersOfPage = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {numbersOfPage.map((numberOfPage): JSX.Element => {
        return (
          <NavLink
            className="pagination__link"
            key={numberOfPage}
            to={`?page=${numberOfPage}`}
            onClick={(): void => setCurrentPage(numberOfPage)}
          >
            {numberOfPage}
          </NavLink>
        );
      })}
    </div>
  );
};
