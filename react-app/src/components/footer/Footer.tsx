import './footer.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__author">
        <a
          className="footer__link"
          href="https://github.com/panakir"
          target="_blank"
          rel="noreferrer"
        >
          &copy; panakir
        </a>
        <span>, 2023</span>
      </div>
      <div className="footer__logo-rs">
        <a href="http://rs.school/" target="_blank" rel="noreferrer">
          <img src="./rs_school.svg" alt="logo RS School" />
        </a>
      </div>
    </footer>
  );
};
