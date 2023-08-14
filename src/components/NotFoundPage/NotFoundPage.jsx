import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='page'>
      <div className='page__info-block'>
        <h1 className='page__status'>404</h1>
        <span className='page__not-found'>Страница не найдена</span>
      </div>
      <button className='page__go-back-btn' onClick={handleGoBack} type='button'>
        Назад
      </button>
    </div>
  );
};

export default NotFoundPage;
