import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="page">
      <div className="page__info-block">
        <h1 className="page__status">404</h1>
        <span className="page__notfound">Страница не найдена</span>
      </div>
      <button
        className="page__go-back-btn"
        onClick={handleGoBack}
        type="button"
      >
        Назад
      </button>
    </section>
  );
};

export default NotFoundPage;
