import { Component } from 'react';
import { Main } from './components/main/Main';
import { Starship } from './interfaces/interfaces';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

export class App extends Component {
  async getData(text: string): Promise<Starship> {
    const url = 'https://swapi.dev/api/planets/?search=' + text;
    const response = await fetch(url)
      .then((res) => res.json())
      .then((data) => data.results);
    return response;
  }

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
