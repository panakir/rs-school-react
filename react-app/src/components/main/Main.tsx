import { Component } from 'react';
import { TopSection } from './topSection/TopSection';
import { BottomSection } from './bottomSection/BottomSection';
import { SearchState, Starship } from '../../interfaces/interfaces';

export class Main extends Component<object, SearchState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchText: '',
      loading: false,
      resultOfSearch: [],
      error: null,
    };
  }

  async getData(text: string): Promise<Starship[]> {
    const url = 'https://swapi.dev/api/starships/?search=' + text;
    const response = await fetch(url)
      .then((res) => res.json())
      .then((data) => data.results)
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  }

  componentDidMount(): void {
    const prevSearch = localStorage.getItem('searchRequest');
    if (prevSearch) {
      this.handleSearch(prevSearch);
    }
  }

  handleSearch = async (text: string) => {
    this.setState({ loading: true });
    const data = await this.getData(text);
    if (data) {
      this.setState({
        searchText: text,
        loading: false,
        resultOfSearch: data,
        error: null,
      });
      localStorage.setItem('searchRequest', text);
    } else {
      this.setState({
        loading: false,
        resultOfSearch: [],
        error: 'Error',
      });
    }
  };

  render() {
    console.log(this.state);

    return (
      <>
        <main className="main">
          <TopSection searchText={this.handleSearch} />
          {this.state.loading ?
            (<div className='loading'></div>) : <BottomSection searchResults={this.state.resultOfSearch} />
          }
        </main>
      </>
    );
  }
}
