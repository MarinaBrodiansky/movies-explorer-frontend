import { useEffect, useState } from 'react'
import { MOVIES_SAVED_PAGE_KEY, RESET_SEARCH_STATE } from '../../constants'
import { filterSearch } from '../../utils/search'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import './SavedMovies.css'

/**
 * Сохранять данные поиска на странице «Сохранённые фильмы» в localStorage не требуется.
 * При переходе пользователя на страницу сохранённых фильмов ему должны быть отображены все его фильмы.
 */
const SavedMovies = ({ movies, onDeleteMovie, requestErrors }) => {
  const [filtredMovies, setFiltredMovies] = useState(movies)
  const [search, setSearch] = useState(RESET_SEARCH_STATE)
  const [page, setPage] = useState(
    Number(localStorage.getItem(MOVIES_SAVED_PAGE_KEY)),
  )

  useEffect(() => {
    setFiltredMovies(movies)
  }, [movies])

  useEffect(() => {
    localStorage.setItem(MOVIES_SAVED_PAGE_KEY, page)
  }, [page])

  return (
    <>
      <div className="saved-movies">
        <div className="saved-movies__content">
          <SearchForm
            setSearchState={setSearch}
            searchDefaultState={search}
            onSearch={search => {
              setPage(0)
              filterSearch({ movies, search, setFiltredMovies })
            }}
          />
          <MoviesCardList
            movies={filtredMovies}
            page={page}
            setPage={setPage}
            savedMovies={movies}
            isShowSaveBtn={false}
            isShowDeleteBtn={true}
            isSavedMoviesPage={true}
            requestErrors={requestErrors}
            onDeleteMovie={onDeleteMovie}
          />
        </div>
      </div>
    </>
  )
}

export default SavedMovies
