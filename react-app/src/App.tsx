import { Main } from './components/main/Main';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';
import { CustomError } from './components/errorBoundary/Error';
import { Route, Routes } from 'react-router-dom';
import { RootLayout } from './components/layouts/RootLayout';

export const App = (): JSX.Element => {
  return (
    <>
      <ErrorBoundary fallback={<CustomError />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Main />}></Route>
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
};
