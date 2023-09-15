import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import logo from '../../images/header-logo.svg'
import { useFormValidate } from '../../hooks/useFormValidate'

const Login = ({ loggedIn, onSignIn, requestErrors }) => {
  const navigate = useNavigate()

  const { values, handleChange, errors, isValid } = useFormValidate()

  useEffect(() => {
    if (loggedIn) {
      navigate('/movies')
    }
  }, [loggedIn])

  return (
    <section className="login">
      <div className="login__header">
        <Link to="/">
          <img src={logo} alt="Логотип" className="login__logo" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
      </div>
      <form
        onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()
          onSignIn(values)
        }}
        className="login__form form"
      >
        <label className="login__label" htmlFor="email">
          E-mail
        </label>
        <input
          className="login__input"
          type="email"
          id="email"
          name="email"
          value={values.email || ''}
          onChange={handleChange}
          placeholder="email"
          required
        />
        <span className="form__error">{errors.email}</span>
        <label className="login__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="login__input"
          type="password"
          id="password"
          name="password"
          minLength={6}
          maxLength={200}
          value={values.password || ''}
          onChange={handleChange}
          placeholder="Пароль"
          autoComplete="password"
          required
        />
        <span className="form__error">{errors.password}</span>
        <div className="form__error">
          {Object.keys(requestErrors.signIn).length
            ? requestErrors.signIn.message === 'Validation failed'
              ? requestErrors.signIn.validation.body.message
              : requestErrors.signIn.message
            : ''}
        </div>
        <button className="login__button" type="submit" disabled={!isValid}>
          Войти
        </button>
      </form>
      <div className="login__bottom">
        <span>Ещё не зарегистрированы?</span>
        <a href="signup" className="login__link">
          Регистрация
        </a>
      </div>
    </section>
  )
}

export default Login
