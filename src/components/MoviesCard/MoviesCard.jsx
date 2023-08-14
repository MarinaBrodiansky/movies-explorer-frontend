import './MoviesCard.css'
import cross from '../../images/cross.svg'
import { MOVIE_URL } from '../../utils/MoviesApi'

const MoviesCard = ({
  movie,
  isShowSaveBtn = true,
  isShowDeleteBtn = false,
  onSaveMovie,
  onDeleteMovie,
  movieIsSaved,
}) => {
  return (
    <li className="card">
      <div className="col">
        <div className="card__header">
          <div className="card__description row">
            <h2 className="card__name">{movie.nameRU}</h2>
            <span className="card__duration">{movie.duration}</span>
          </div>
          <div className='row'>
          {isShowSaveBtn && (
            <button
              type="button"
              onClick={() => movieIsSaved(movie) ? onDeleteMovie(movie) : onSaveMovie(movie)}
              className={`card__button ${
                movieIsSaved(movie) ? 'card__button_saved' : 'card__button_unsaved'
              }`}
            />
          )}
          {isShowDeleteBtn && (
            <button
              type="button"
              onClick={() => onDeleteMovie(movie)}
              className="card__button card__delete"
            >
              <img src={cross} alt="кнопка удалить" />
            </button>
          )}
          </div>

        </div>
      </div>
      <div className='card__in col'>
      <a className="card__link" target="_blank" rel="noreferrer" href={movie.trailerLink}>
        <img
          src={
            movie.thumbnail ||
            `${MOVIE_URL}${movie.image.formats.thumbnail.url}`
          }
          alt={`Обложка фильма: ${movie.image.alternativeText}`}
          className="card__image"
        />
      </a>
      </div>
    </li>
  )
}

export default MoviesCard
