import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <img className="logo header__logo" src="./logo.png" alt="logo" />
      <div className="header__wrapper">
        <h1 className="header__title">
          here you can find out information about ships from Star Wars
        </h1>
      </div>
    </header>
  );
}
