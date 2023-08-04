import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </span>
      <div className="footer__bottom-block">
        <span className="footer__copyright">© 2023</span>
        <div className="footer__links">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/MarinaBrodiansky"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
