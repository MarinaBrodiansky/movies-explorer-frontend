import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navigation = ({ loggedIn }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const location = useLocation().pathname;
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <nav className='navigation'>
      {loggedIn ? (
        <>
          <div
            className={
              location === '/'
                ? 'navigation__movies navigation__movies_white'
                : 'navigation__movies'
            }
          >
            <Link
              to='/movies'
              className={
                location === '/movies'
                  ? 'navigation__movies-link_active'
                  : 'navigation__movies-link'
              }
            >
              Фильмы
            </Link>
            <Link
              to='/saved-movies'
              className={
                location === '/saved-movies'
                  ? 'navigation__movies-link_active'
                  : 'navigation__movies-link'
              }
            >
              Сохранённые фильмы
            </Link>
          </div>
          <div>
            <Link to='/profile'>
              <button className='navigation__button_account' type='button'>Аккаунт</button>
            </Link>
          </div>
        </>
      ) : (
        <div className='navigation__auth'>
          <Link to='/signup' className='navigation__link'>
            Регистрация
          </Link>
          <Link to='/signin'>
            <button className='navigation__button' type='button'>Войти</button>
          </Link>
        </div>
      )}
      {loggedIn &&
        (!isBurgerMenuOpen ? (
          <button
            className={
              location === '/'
                ? 'burger__button burger__button_white'
                : 'burger__button'
            }
            onClick={toggleBurgerMenu}
            type='button'
          />
        ) : (
          <BurgerMenu onClose={toggleBurgerMenu} />
        ))}
    </nav>
  );
};

export default Navigation;
