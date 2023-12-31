import { useMemo } from 'react';
import { maxMoviesByWidth, useWidth } from '../../hooks/useWidth';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({
  movies,
  page,
  isSearch,
  setPage,
  savedMovies,
  isShowSaveBtn,
  isShowDeleteBtn,
  isSavedMoviesPage,
  requestErrors,
  onSaveMovie,
  onDeleteMovie,
}) => {
  const width = useWidth();
  const [count, plus] = maxMoviesByWidth(width);
  const showedMovies = useMemo(() => {
    if (Array.isArray(movies)) {
      return isSavedMoviesPage ? movies : movies.slice(0, count + (plus * page));
    }

    return [];
  }, [movies, page, plus, count, isSavedMoviesPage]);

  const movieIsSaved = ({ id }) => {
    if (Array.isArray(savedMovies)) {
      return savedMovies.filter(m => m.movieId === id).length;
    }

    return false;
  };

  const getSavedMovie = movie => {
    if ('_id' in movie) {
      return movie;
    }

    if (Array.isArray(savedMovies)) {
      const [saved] = savedMovies.filter(m => m.movieId === movie.id) || [null];

      return saved;
    }
  };

  function isShowMoreButton(m, s) {
    return m.length > s.length;
  }

  function hasErrors(e) {
    return Boolean(e.movies && Object.keys(e.movies).length);
  }

  return hasErrors(requestErrors) ? (
    <p className="cards__request-error">
      Во время запроса произошла ошибка. Возможно, проблема с соединением или
      сервер недоступен. Подождите немного и попробуйте ещё раз.
    </p>
  ) : (
    <div className="cards">
      <ul className="cards__list">
        {isSearch ? (
          Array.isArray(showedMovies) && showedMovies.length ? (
            showedMovies.map(movie => {
              return (
                <MoviesCard
                  key={isSavedMoviesPage ? movie._id : movie.id}
                  movie={movie}
                  onSaveMovie={onSaveMovie}
                  onDeleteMovie={() => onDeleteMovie(getSavedMovie(movie))}
                  movieIsSaved={movieIsSaved}
                  isShowSaveBtn={isShowSaveBtn}
                  isShowDeleteBtn={isShowDeleteBtn}
                />
              );
            })
          ) : (
            <span className="cards__not-found">Ничего не найдено</span>
          )
        ) : (
          ''
        )}
      </ul>
      { isSearch && isShowMoreButton(movies, showedMovies) ? (
        <button
          onClick={() => setPage(prev => ++prev)}
          className="cards__button"
          type="button"
        >
          Ещё
        </button>
      ) : ('')
      }
    </div>
  );
};

/**
 * Обратите внимание, кнопка «Ещё» при отображении
 * ранее найденных фильмов должна продолжать работать корректно.
 *
 * Выстройте работу с локальным хранилищем и стейт-переменной в правильном порядке.
 */

export default MoviesCardList;
