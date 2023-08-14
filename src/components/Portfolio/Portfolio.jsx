import "./Portfolio.css";

const Portfolio = () => {
  return (
    <article className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__projects">
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            rel="noreferrer"
            href="https://github.com/"
            target="_blank"
          >
            Статичный сайт
          </a>
          <span>↗</span>
        </li>
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            rel="noreferrer"
            href="https://github.com/"
            target="_blank"
          >
            Адаптивный сайт
          </a>
          <span>↗</span>
        </li>
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            rel="noreferrer"
            href="https://github.com/"
            target="_blank"
          >
            Одностраничное приложение
          </a>
          <span>↗</span>
        </li>
      </ul>
    </article>
  );
};

export default Portfolio;
