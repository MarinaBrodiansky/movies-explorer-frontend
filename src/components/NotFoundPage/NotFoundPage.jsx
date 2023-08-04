import React from "react";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="page__container">
      <div className="page__info-block">
        <span className="page__status">404</span>
        <span className="page__notfound">Страница не найдена</span>
      </div>
      <button className="page__go-back-btn">Назад</button>
    </div>
  );
};

export default NotFoundPage;
