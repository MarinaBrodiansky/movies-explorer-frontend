import React from "react";
import "./Login.css";
import logo from "../../images/header-logo.svg";

const Login = () => {
  return (
    <div className="login__container">
      <div className="login__header">
        <img src={logo} alt="Логотип" className="login__logo" />

        <h1 className="login__title">Рады видеть!</h1>
      </div>

      <form className="login__form form">
        <label className="login__label" htmlFor="email">
          E-mail
        </label>
        <input
          className="login__input"
          type="email"
          id="email"
          name="email"
          required
        />
        <span className="register__error"></span>
        <label className="login__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="login__input"
          type="password"
          id="password"
          name="password"
          required
        />
        <span className="register__error"></span>
        <button className="login__button" type="submit">
          Войти
        </button>
      </form>
      <div className="login__bottom">
        <span>Ещё не зарегистрированы?</span>
        <a href="signup" className="login__link">
          Регистрация
        </a>
      </div>
    </div>
  );
};

export default Login;
