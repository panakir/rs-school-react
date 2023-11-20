import { useCallback, useEffect, useState } from 'react';
import { TopSection } from './topSection/TopSection';
import { BottomSection } from './bottomSection/BottomSection';
import { Starship } from '../../interfaces/interfaces';
import { getSearchPage } from '../../API';
import { MainSectionContext } from '../context/context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setLoadingOnPage } from '../../store/isLoadingSlice/isLoadingSlice';

export const Main = (): JSX.Element => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: RootState) => state.isLoading.isLoading
  );
  const searchValue = useSelector(
    (state: RootState) => state.searchValue.searchValue
  );

  const resultsOnPage = useSelector(
    (state: RootState) => state.amountItemsOnPage.amount
  );

  const [resultOfSearch, setResultOfSearch] = useState<Starship[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [countAllResults, setCountAllResults] = useState(resultsOnPage);

  const handleSearch = useCallback(
    async (text: string): Promise<void> => {
      dispatch(setLoadingOnPage(true));
      try {
        if (text === searchValue) {
          const search = await getSearchPage(searchValue, currentPage);
          setCountAllResults(search.count);
          setResultOfSearch(search.results);
          localStorage.setItem('searchRequest', searchValue);
        } else {
          const search = await getSearchPage(text);
          setCountAllResults(search.count);
          setResultOfSearch(search.results);
          localStorage.setItem('searchRequest', text);
          setCurrentPage(1);
        }
      } catch {
        setResultOfSearch([]);
      } finally {
        dispatch(setLoadingOnPage(false));
      }
    },
    [currentPage, searchValue, dispatch]
  );

  useEffect(() => {
    const getData = async (): Promise<void> => {
      if (searchValue) {
        handleSearch(searchValue);
      } else {
        dispatch(setLoadingOnPage(true));
        const search = await getSearchPage('', currentPage);
        setResultOfSearch(search.results);
        dispatch(setLoadingOnPage(false));
      }
    };
    getData();
  }, [currentPage, resultsOnPage]);

  return (
    <MainSectionContext.Provider
      value={{
        resultsOnPage,
        currentPage,
        setCurrentPage,
        countAllResults,
        setCountAllResults,
        resultOfSearch,
        setResultOfSearch,
        handleSearch,
      }}
    >
      <main className="main">
        <TopSection />
        {isLoading ? <div className="loading"></div> : <BottomSection />}
      </main>
    </MainSectionContext.Provider>
  );
};
