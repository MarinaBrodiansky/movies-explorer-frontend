import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = ({ onClose }) => {
  return (
    <div className="burger">
      <div className="burger__backdrop">
        <div className="burger__container">
          <button
            type="button"
            className="burger__close-btn"
            onClick={() => onClose()}
          />
          <nav>
            <ul className="burger__menu">
              <li>
              <NavLink
                exact="true"
                to="/"
                className={({isActive}) => isActive ? 'burger-link_active' : 'burger-link'}
                >
                Главная
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/movies"
                className={({isActive}) => isActive ? 'burger-link_active' : 'burger-link'}
                >
                Фильмы
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/saved-movies"
                className={({isActive}) => isActive ? 'burger-link_active' : 'burger-link'}
              >
                Сохранённые фильмы
              </NavLink>
              </li>
            </ul>
          </nav>
          <Link to="/profile">
            <button className="burger__button_account" type='button'>Аккаунт</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
