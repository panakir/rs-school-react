import './pagination.scss';
import { NavLink } from 'react-router-dom';

interface Props {
  resultsOnPage: number;
  countResults: number;
  setCurrentPage: (page: number) => void;
}

export const Pagination = ({
  resultsOnPage,
  countResults,
  setCurrentPage,
}: Props): JSX.Element => {
  const pagesCount = Math.ceil(countResults / resultsOnPage);
  const numbersOfPage = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {numbersOfPage.map((numberOfPage): JSX.Element => {
        return (
          <NavLink
            className="pagination__link"
            key={numberOfPage}
            to={`/?page=${numberOfPage}`}
            onClick={(): void => setCurrentPage(numberOfPage)}
          >
            {numberOfPage}
          </NavLink>
        );
      })}
    </div>
  );
};
