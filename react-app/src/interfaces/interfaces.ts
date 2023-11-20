export interface Starship {
  name: string;
  model: string;
  length: string;
  passengers: string;
  starship_class: string;
}

export interface MainSectionContextData {
  resultsOnPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  countAllResults: number;
  setCountAllResults: (count: number) => void;
  resultOfSearch: Starship[];
  setResultOfSearch: (data: Starship[]) => void;
  handleSearch: (value: string) => void;
}
