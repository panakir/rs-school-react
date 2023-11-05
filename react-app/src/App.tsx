import { Main } from './components/main/Main';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';
import { CustomError } from './components/errorBoundary/Error';

export const App = (): JSX.Element => {
  return (
    <>
      <ErrorBoundary fallback={<CustomError />}>
        <Header />
        <Main />
        <Footer />
      </ErrorBoundary>
    </>
  );
};
