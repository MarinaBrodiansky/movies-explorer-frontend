import './MoviesCard.css';
import cross from '../../images/cross.svg' 

const MoviesCard = ({ movie, isShowSaveBtn = true, isShowDeleteBtn = false }) => {
  return (
    <li className='card'>
      <div className='card__description'>
        <h2 className='card__name'>{movie.name}</h2>
        <span className='card__duration'>2 hours</span>
      </div>
      {isShowSaveBtn && <button
        type='button'
        className={`card__button ${
          movie.isSaved ? 'card__button_saved' : 'card__button_unsaved'
        }`}
      />}
      {isShowDeleteBtn && <button
        type='button'
        className="card__button card__delete"
      ><img src={cross} alt="кнопка удалить" /></button>}
      <a className='card__link' target='_blank' href='/#'>
        <img
          src={movie.img}
          alt={`Обложка фильма: ${movie.name}`}
          className='card__image'
        />
      </a>
    </li>
  );
};

export default MoviesCard;
