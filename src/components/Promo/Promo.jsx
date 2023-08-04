import React from "react";
import Header from "../Header/Header";
import "./Promo.css";

const Promo = ({ loggedIn }) => {
  return (
    <section className="promo">
      <Header loggedIn={loggedIn} />
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <ul className="promo__list">
          <li className="promo__icon">
            <a className="promo__link" href="#project">
              О проекте
            </a>
          </li>
          <li className="promo__icon">
            <a className="promo__link" href="#techs">
              Технологии
            </a>
          </li>
          <li className="promo__icon">
            <a className="promo__link" href="#student">
              Студент
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Promo;
