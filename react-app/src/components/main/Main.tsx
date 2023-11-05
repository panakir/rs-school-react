import { useCallback, useEffect, useState } from 'react';
import { TopSection } from './topSection/TopSection';
import { BottomSection } from './bottomSection/BottomSection';
import { Starship } from '../../interfaces/interfaces';
import { getAllStarships, getSearchPage } from '../../API';
import { useNavigate, useParams } from 'react-router';

const resultsOnPage = 10;

export const Main = (): JSX.Element => {
  const navigation = useNavigate();
  const [searchText, setSearchText] = useState(
    localStorage.getItem('searchRequest') || ''
  );
  const [loading, setLoading] = useState(false);
  const [resultOfSearch, setResultOfSearch] = useState<Starship[]>([]);
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(page) | 1);
  const [countResults, setCountResults] = useState(resultsOnPage);

  const handleSearch = useCallback(
    async (text: string): Promise<void> => {
      setLoading(true);
      try {
        if (text === searchText) {
          const search = await getSearchPage(text, currentPage);
          setCountResults(search.count);
          setResultOfSearch(search.results);
          setSearchText(text);
          localStorage.setItem('searchRequest', text);
        } else {
          const search = await getSearchPage(searchText, 1);
          setCountResults(search.count);
          setResultOfSearch(search.results);
          setSearchText(text);
          localStorage.setItem('searchRequest', text);
          setCurrentPage(1);
          // navigation('/search/1')
        }
      } catch {
        setResultOfSearch([]);
      } finally {
        setLoading(false);
      }
    },
    [currentPage, navigation, searchText]
  );

  useEffect((): void => {
    if (page) {
      setCurrentPage(parseInt(page, 10));
    }
  }, [page]);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      if (searchText) {
        handleSearch(searchText);
      } else {
        setLoading(true);
        const search = await getAllStarships();
        setResultOfSearch(search);
        setSearchText('');
        setLoading(false);
      }
    };
    getData();
  }, [searchText, handleSearch]);

  return (
    <>
      <main className="main">
        <TopSection searchText={handleSearch} />
        {loading ? (
          <div className="loading"></div>
        ) : (
          <BottomSection
            searchResults={resultOfSearch}
            resultsOnPage={resultsOnPage}
            countResults={countResults}
            setCurrentPage={setCurrentPage}
          />
        )}
      </main>
    </>
  );
};
