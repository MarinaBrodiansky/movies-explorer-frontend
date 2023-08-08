import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__projects'>
        <li className='portfolio__list'>
          <a
            className='portfolio__link'
            rel='noreferrer'
            href='https://github.com/MarinaBrodiansky/how-to-learn'
            target='_blank'
          >
            Статичный сайт <span>↗️</span>
          </a>          
        </li>
        <li className='portfolio__list'>
          <a
            className='portfolio__link'
            rel='noreferrer'
            href='https://github.com/MarinaBrodiansky/russian-travel'
            target='_blank'
          >
            Адаптивный сайт <span>↗️</span>
          </a>
          
        </li>
        <li className='portfolio__list'>
          <a
            className='portfolio__link'
            rel='noreferrer'
            href='https://github.com/MarinaBrodiansky/react-mesto-api-full-gha'
            target='_blank'
          >
            Одностраничное приложение <span>↗️</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
