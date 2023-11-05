import { Starship } from './interfaces/interfaces';

interface AllData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[];
}

export const getAllData = async (): Promise<AllData> => {
  const url = 'https://swapi.dev/api/starships';
  const response = await fetch(url)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error.message);
    });
  return response;
};

export const getAllStarships = async (): Promise<Starship[]> =>
  (await getAllData()).results;

export const getStarship = async (text: string): Promise<Starship[]> => {
  const url = 'https://swapi.dev/api/starships/?search=' + text;
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((error) => {
      throw new Error(error);
    });
  return response;
};

export const getSearchPage = async (
  text: string,
  page = 1
): Promise<AllData> => {
  const url = `https://swapi.dev/api/starships/?search=${text}&page=${page}`;
  const response = await fetch(url)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error.message);
    });
  return response;
};
