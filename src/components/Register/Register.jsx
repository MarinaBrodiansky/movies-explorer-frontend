import React from 'react'
import { Link } from 'react-router-dom'
import { useFormValidate } from '../../hooks/useFormValidate'
import logo from '../../images/header-logo.svg'
import { validateEmail, validateName } from '../../utils/validate'
import './Register.css'

const Register = ({ onSignUp, requestErrors }) => {
  const { values, handleChange, errors, isValid } = useFormValidate()

  return (
    <section className="register">
      <div className="register__header">
        <Link to="/">
          <img src={logo} alt="Логотип" className="register__logo" />
        </Link>

        <h2 className="register__title">Добро пожаловать!</h2>
      </div>

      <form
        onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()
          onSignUp(values)
        }}
        className="register__form form"
      >
        <label className="register__label" htmlFor="name">
          Имя
        </label>
        <input
          className="register__input"
          type="text"
          id="name"
          name="name"
          value={values.name || ''}
          onChange={handleChange}
          minLength={2}
          maxLength={40}
          required
        />
        <span className="form__error">
          {errors.name || validateName(values.name).message}
        </span>
        <label className="register__label" htmlFor="email">
          E-mail
        </label>
        <input
          className="register__input"
          type="email"
          id="email"
          name="email"
          value={values.email || ''}
          onChange={handleChange}
          required
        />
        <span className="form__error">
          {errors.email || validateEmail(values.email).message}
        </span>
        <label className="register__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="register__input"
          type="password"
          id="password"
          name="password"
          value={values.password || ''}
          onChange={handleChange}
          minLength={6}
          maxLength={200}
          required
          autoComplete="true"
        />
        <span className="form__error">{errors.password}</span>
        <div className="form__error">
          {Object.keys(requestErrors.signUp).length
            ? requestErrors.signUp.message === 'Validation failed'
              ? requestErrors.signUp.validation.body.message
              : requestErrors.signUp.message
            : ''}
        </div>
        <button
          className="register__button"
          type="submit"
          disabled={
            !isValid ||
            validateName(values.name).invalid ||
            validateEmail(values.email).invalid
          }
        >
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
  )
}

export default Register
