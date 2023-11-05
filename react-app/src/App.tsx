import { Main } from './components/main/Main';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';
import { CustomError } from './components/errorBoundary/Error';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './components/errorPage/ErrorPage';

const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '*', element: <ErrorPage /> },
]);

export const App = (): JSX.Element => {
  return (
    <>
      <ErrorBoundary fallback={<CustomError />}>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </ErrorBoundary>
    </>
  );
};
