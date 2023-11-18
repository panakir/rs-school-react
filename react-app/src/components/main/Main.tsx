import { useCallback, useEffect, useState } from 'react';
import { TopSection } from './topSection/TopSection';
import { BottomSection } from './bottomSection/BottomSection';
import { Starship } from '../../interfaces/interfaces';
import { getSearchPage } from '../../API';
import { MainSectionContext } from '../context/context';

const resultsOnPage = 10;

export const Main = (): JSX.Element => {
  const [searchText, setSearchText] = useState(
    localStorage.getItem('searchRequest') || ''
  );
  const [loading, setLoading] = useState(false);
  const [resultOfSearch, setResultOfSearch] = useState<Starship[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [countAllResults, setCountAllResults] = useState(resultsOnPage);

  const handleSearch = useCallback(
    async (text: string): Promise<void> => {
      setLoading(true);
      try {
        if (text === searchText) {
          const search = await getSearchPage(text, currentPage);
          setCountAllResults(search.count);
          setResultOfSearch(search.results);
          setSearchText(text);
          localStorage.setItem('searchRequest', text);
        } else {
          const search = await getSearchPage(searchText);
          setCountAllResults(search.count);
          setResultOfSearch(search.results);
          setSearchText(text);
          localStorage.setItem('searchRequest', text);
          setCurrentPage(1);
        }
      } catch {
        setResultOfSearch([]);
      } finally {
        setLoading(false);
      }
    },
    [currentPage, searchText]
  );

  useEffect(() => {
    const getData = async (): Promise<void> => {
      if (searchText) {
        handleSearch(searchText);
      } else {
        setLoading(true);
        const search = await getSearchPage('', currentPage);
        setResultOfSearch(search.results);
        setSearchText('');
        setLoading(false);
      }
    };
    getData();
  }, [searchText, handleSearch, currentPage]);

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
        {loading ? <div className="loading"></div> : <BottomSection />}
      </main>
    </MainSectionContext.Provider>
  );
};
