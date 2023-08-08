import React from 'react';
import photo from '../../images/myphoto.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className='about-me' id='student'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__content'>
        <article className='about-me__info'>
          <h3 className='about-me__name'>Виталий</h3>
          <p className='about-me__job'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__bio'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании 'СКБ
            Контур'. После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className='about-me__link'
            href='https://github.com/'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </article>
        <img className='about-me__photo' src={photo} alt='Виталий' />
      </div>
    </section>
  );
};

export default AboutMe;

