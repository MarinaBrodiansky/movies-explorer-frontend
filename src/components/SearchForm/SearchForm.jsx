import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import find from '../../images/find.svg'
import { useState } from 'react'
const SearchForm = ({
  onSearch,
  searchDefaultState: search,
  setSearchState: setSearch,
}) => {
  const [error, setError] = useState()
  /**
   * Помимо отображения найденных фильмов, нужно сделать так,
   * чтобы результаты уже выполненного запроса не пропадали.
   * а снова отображались пользователю, если он перезагрузил
   * страницу `/movies` или даже закрыл вкладку,
   * но потом вернулся на сайт.
   *
   * Для этого после поиска фильмов сохраните в localStorage
   * - текст запроса,
   * - состояние переключателя короткометражек
   * - и найденные фильмы.
   */

  const handleSearch = (state) => {
    if (state.s.length < 1) {
      setError('Нужно ввести ключевое слово')
    } else {
      setError('')
      onSearch(state)
    }
  }

  return (
    <div className="search">
      <form
        className="search__form form"
        name="search-saved-movie-form"
        onSubmit={e => {
          e.preventDefault()
          handleSearch(search)
        }}
      >
        <input
          type="text"
          placeholder="Фильм"
          className="search__input"
          value={search.s}
          onChange={e => setSearch({ shorts: search.shorts, s: e.target.value })}
          name="s"
        />
        <button type="submit" className="search__button">
          <img src={find} alt="кнопка поиска" />
        </button>
        <div className="break"></div>
        <FilterCheckbox
          checked={search.shorts}
          onChange={() => {
            const state = { ...search, shorts: !search.shorts }
            setSearch(state)
            setTimeout(() => handleSearch(state))
          }}
        />
      </form>
      <div className='form__error'>{error}</div>
      <hr />
    </div>
  )
}

export default SearchForm
