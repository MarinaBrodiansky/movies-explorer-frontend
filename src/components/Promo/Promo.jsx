import React from "react";
import "./Promo.css";

const Promo = () => {
  return (
    <>
      <article className="promo">
        <div className="promo__container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <nav>
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
          </nav>
        </div>
      </article>
    </>
  );
};

export default Promo;
