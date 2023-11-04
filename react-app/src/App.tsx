import { Main } from './components/main/Main';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
