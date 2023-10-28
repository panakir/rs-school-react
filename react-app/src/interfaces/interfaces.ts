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

export interface SearchResults {
  searchResults: Starship[];
}

export interface CardData {
  starship: Starship;
  id: number;
}
