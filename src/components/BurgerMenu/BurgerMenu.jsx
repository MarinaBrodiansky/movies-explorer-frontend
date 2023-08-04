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
          <div className="burger__menu">
            <NavLink
              exact
              to="/"
              className="burger-link"
              activeClassName="burger-link_active"
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className="burger-link"
              activeClassName="burger-link_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="burger-link"
              activeClassName="burger-link_active"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <Link to="/profile">
            <button className="burger__button_account">Аккаунт</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
