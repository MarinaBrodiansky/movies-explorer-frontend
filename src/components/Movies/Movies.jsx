import { useEffect, useState } from 'react'
import {
  FILTRED_MOVIES_KEY,
  MOVIES_PAGE_KEY,
  MOVIES_SEARCH_KEY,
  RESET_SEARCH_STATE,
} from '../../constants'
import { parseJSON } from '../../utils/helpers'
import { filterSearch } from '../../utils/search'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'

const Movies = ({
  movies,
  savedMovies,
  onSaveMovie,
  onDeleteMovie,
  requestErrors,
}) => {
  const [filtredMovies, setFiltredMovies] = useState(
    parseJSON(localStorage.getItem(FILTRED_MOVIES_KEY), []),
  )
  const [search, setSearch] = useState(
    parseJSON(localStorage.getItem(MOVIES_SEARCH_KEY), RESET_SEARCH_STATE),
  )
  const [page, setPage] = useState(
    Number(localStorage.getItem(MOVIES_PAGE_KEY)),
  )

  useEffect(() => {
    localStorage.setItem(MOVIES_PAGE_KEY, page)
  }, [page])

  useEffect(() => {
    localStorage.setItem(MOVIES_SEARCH_KEY, JSON.stringify(search))
  }, [search])

  useEffect(() => {
    localStorage.setItem(FILTRED_MOVIES_KEY, JSON.stringify(filtredMovies))
  }, [filtredMovies])

  return (
    <section className="movies">
      <h2 hidden="hidden">Поиск фильмов</h2>
      <div className="movies__content">
        <SearchForm
          setSearchState={setSearch}
          searchDefaultState={search}
          onSearch={search => {
            setPage(0)
            filterSearch({ movies, search, setFiltredMovies })
          }}
        />

        <MoviesCardList
          isSavedMoviesPage={false}
          movies={filtredMovies}
          page={page}
          setPage={setPage}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
          requestErrors={requestErrors}
          savedMovies={savedMovies}
        />
      </div>
    </section>
  )
}

export default Movies
