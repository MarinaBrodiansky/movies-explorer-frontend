import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/header-logo.svg";

const Register = () => {
  return (
    <section className="register">
      <div className="register__header">
        <Link to="/">
          <img src={logo} alt="Логотип" className="register__logo" />
        </Link>

        <h1 className="register__title">Добро пожаловать!</h1>
      </div>

      <form className="register__form form">
        <label className="register__label" htmlFor="name">
          Имя
        </label>
        <input
          className="register__input"
          type="text"
          id="name"
          name="name"
          maxLength={40}
          minLength={6}
          placeholder="Имя"
          required
        />
        <div className="register__error"></div>
        <label className="register__label" htmlFor="email">
          E-mail
        </label>
        <input
          className="register__input"
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required
          pattern={"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"}
        />
        <div className="register__error"></div>
        <label className="register__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="register__input"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          minLength={6}
          maxLength={200}
          required
        />
        <div className="register__error"></div>
        <button className="register__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className="register__bottom">
        <span>Уже зарегистрированы?</span>
        <Link to="/signin" className="register__link">
          Войти
        </Link>
      </div>
    </section>
  );
};

export default Register;
