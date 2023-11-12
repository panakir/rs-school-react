import './bottomSection.scss';
import { Starship } from '../../../interfaces/interfaces';
import { StarshipCard } from '../../StarshipCard/StarshipCard';
import { Pagination } from '../../pagination/Pagination';

interface Props {
  searchResults: Starship[] | [];
  resultsOnPage: number;
  countResults: number;
  setCurrentPage: (page: number) => void;
}

export const BottomSection = ({
  searchResults,
  resultsOnPage,
  countResults,
  setCurrentPage,
}: Props): JSX.Element => {
  return (
    <>
      <div className="bottom-section">
        {searchResults.map((item, index) => (
          <StarshipCard key={index} starship={item} />
        ))}
      </div>
      <Pagination
        resultsOnPage={resultsOnPage}
        countResults={countResults}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
