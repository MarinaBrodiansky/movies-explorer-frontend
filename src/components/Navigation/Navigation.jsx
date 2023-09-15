import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const Navigation = ({ loggedIn }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const location = useLocation().pathname
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
  }

  return (
    <nav className="navigation">
      {loggedIn ? (
        <>
          <ul
            className={
              location === '/'
                ? 'navigation__movies navigation__movies-white'
                : 'navigation__movies'
            }
          >
            <li>
              <Link
                to="/movies"
                className={
                  location === '/movies'
                    ? 'navigation__movies-link-active'
                    : 'navigation__movies-link'
                }
              >
                Фильмы
              </Link>
            </li>
            <li>
              <Link
                to="/saved-movies"
                className={
                  location === '/saved-movies'
                    ? 'navigation__movies-link-active'
                    : 'navigation__movies-link'
                }
              >
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/profile" className="navigation__button-account">
                Аккаунт
              </Link>
            </li>
          </ul>
          {!isBurgerMenuOpen ? (
            <ul className="burger">
              <li>
                <button
                  className={
                    location === '/'
                      ? 'burger__button burger__button-white'
                      : 'burger__button'
                  }
                  onClick={toggleBurgerMenu}
                  type="button"
                />
              </li>
            </ul>
          ) : (
            <BurgerMenu onClose={toggleBurgerMenu} />
          )}
        </>
      ) : (
        <>
          <ul>{/* left navigation links */}</ul>
          <ul className="navigation__auth">
            <li>
              <Link to="/signup" className="navigation__link">
                Регистрация
              </Link>
            </li>
            <li>
              <Link to="/signin" className="navigation__button">
                Войти
              </Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  )
}

export default Navigation
