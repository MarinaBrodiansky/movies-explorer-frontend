import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import find from '../../images/find.svg'

const SearchForm = ({
  onSearch,
  searchDefaultState: search,
  setSearchState: setSearch,
}) => {
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
  return (
    <div className="search">
      <form
        className="search__form form"
        name="search-saved-movie-form"
        onSubmit={e => {
          e.preventDefault()
          onSearch(search)
        }}
      >
        <input
          type="text"
          placeholder="Фильм"
          className="search__input"
          required
          value={search.s}
          onChange={e => setSearch({ shorts: search.shorts, s: e.target.value })}
          minLength={1}
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
            setTimeout(() => onSearch(state))
          }}
        />
      </form>
      <hr />
    </div>
  )
}

export default SearchForm
