import { useMemo } from 'react'
import { maxMoviesByWidth, useWidth } from '../../hooks/useWidth'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

const MoviesCardList = ({
  movies,
  page,
  setPage,
  savedMovies,
  isShowSaveBtn,
  isShowDeleteBtn,
  requestErrors,
  onSaveMovie,
  onDeleteMovie,
}) => {
  const width = useWidth()
  const [count, plus] = maxMoviesByWidth(width)
  const showedMovies = useMemo(
    () => {
      if (Array.isArray(movies)) {
        return movies.slice(0, count + page)
      }

      return []
    },
    [movies, page, count],
  )

  const movieIsSaved = ({ id }) => {
    if (Array.isArray(savedMovies)) {
      return savedMovies.filter(m => m.movieId === id).length
    }

    return false
  }

  const getSavedMovie = (movie) => {
    if ('_id' in movie) {
      return movie
    }

    if (Array.isArray(savedMovies)) {
      const [saved] = savedMovies.filter(m => m.movieId === movie.id) || [null]
      
      return saved
    }
  }

  function isShowMoreButton(m, s) {
    return m.length > s.length
  }

  function hasErrors(e) {
    return Boolean(e.movies && Object.keys(e.movies).length)
  }

  return hasErrors(requestErrors) ? (
    <p className='cards__request-error'>
      Во время запроса произошла ошибка. Возможно, проблема с соединением или
      сервер недоступен. Подождите немного и попробуйте ещё раз.
    </p>
  ) : (
    <div className="cards">
      <ul className="cards__list">
        {Array.isArray(showedMovies) && showedMovies.length ? (
          showedMovies.map((movie, i) => {
            return (
              <MoviesCard
                key={i}
                movie={movie}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={() => onDeleteMovie(getSavedMovie(movie))}
                movieIsSaved={movieIsSaved}
                isShowSaveBtn={isShowSaveBtn}
                isShowDeleteBtn={isShowDeleteBtn}
              />
            )
          })
        ) : (
          <span className="cards__not-found">Ничего не найдено</span>
        )}
      </ul>
      {isShowMoreButton(movies, showedMovies) && (
        <button
          onClick={() => setPage(prev => prev + plus)}
          className="cards__button"
          type="button"
        >
          Ещё
        </button>
      )}
    </div>
  )
}

/**
 * Обратите внимание, кнопка «Ещё» при отображении
 * ранее найденных фильмов должна продолжать работать корректно.
 *
 * Выстройте работу с локальным хранилищем и стейт-переменной в правильном порядке.
 */

export default MoviesCardList
