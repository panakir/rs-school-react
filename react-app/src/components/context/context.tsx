import { createContext } from 'react';
import { MainSectionContextData } from '../../interfaces/interfaces';

export const MainSectionContext = createContext<MainSectionContextData>({
  resultsOnPage: 10,
  currentPage: 1,
  setCurrentPage: () => {},
  countAllResults: 0,
  setCountAllResults: () => {},
  resultOfSearch: [],
  setResultOfSearch: () => [],
  handleSearch: () => {},
});
