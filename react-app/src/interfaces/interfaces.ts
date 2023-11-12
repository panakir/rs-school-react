export interface Starship {
  name: string;
  model: string;
  length: string;
  passengers: string;
  starship_class: string;
}

export interface SearchInputProps {
  searchText: (text: string) => void;
}

export interface SearchInputState {
  searchInput: string;
}

export interface CardData {
  starship: Starship;
  id: number;
}

export interface SearchState {
  searchText: string;
  loading: boolean;
  resultOfSearch: [] | Starship[];
  error: null | string;
}

export interface MainSectionContextData {
  resultsOnPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  countAllResults: number;
  setCountAllResults: (count: number) => void;
  resultOfSearch: Starship[];
  setResultOfSearch: (data: Starship[]) => void;
}
