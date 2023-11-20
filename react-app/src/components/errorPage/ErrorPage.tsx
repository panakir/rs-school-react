import { Link } from 'react-router-dom';

export const ErrorPage = (): JSX.Element => {
  return (
    <div className="error-page error">
      <h1 className="error__title">Oops!</h1>
      <p className="error__text">Sorry, your page is not found</p>
      <Link className="error__link" to="/">
        Home page
      </Link>
    </div>
  );
};
