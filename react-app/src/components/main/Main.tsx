import { useEffect, useState } from 'react';
import { TopSection } from './topSection/TopSection';
import { BottomSection } from './bottomSection/BottomSection';
import { Starship } from '../../interfaces/interfaces';

export const Main = (): JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultOfSearch, setResultOfSearch] = useState<Starship[]>([]);

  const getData = async (text: string): Promise<Starship[]> => {
    const url = 'https://swapi.dev/api/starships/?search=' + text;
    const response = await fetch(url)
      .then((res) => res.json())
      .then((data) => data.results)
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };

  const handleSearch = async (text: string): Promise<void> => {
    setLoading(true);
    const data = await getData(text);
    localStorage.setItem('searchRequest', text);
    if (data) {
      setSearchText(text);
      setLoading(false);
      setResultOfSearch(data);
    } else {
      setLoading(false);
      setResultOfSearch([]);
    }
  };

  useEffect((): void => {
    if (searchText) {
      handleSearch(searchText);
    }
  }, [handleSearch, searchText]);

  return (
    <>
      <main className="main">
        <TopSection searchText={handleSearch} />
        {loading ? (
          <div className="loading"></div>
        ) : (
          <BottomSection searchResults={resultOfSearch} />
        )}
      </main>
    </>
  );
};
