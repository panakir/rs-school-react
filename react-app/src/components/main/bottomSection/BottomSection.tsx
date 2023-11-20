import './bottomSection.scss';
import { StarshipCard } from '../../StarshipCard/StarshipCard';
import { Pagination } from '../../pagination/Pagination';
import { useContext } from 'react';
import { MainSectionContext } from '../../context/context';

export const BottomSection = (): JSX.Element => {
  const { resultOfSearch } = useContext(MainSectionContext);
  return (
    <>
      <div className="bottom-section">
        {resultOfSearch.map((item, index) => (
          <StarshipCard key={index} starship={item} />
        ))}
      </div>
      <Pagination />
    </>
  );
};
