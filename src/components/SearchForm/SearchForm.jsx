import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import find from "../../images/find.svg";

const SearchForm = () => {
  return (
    <section className="search">
      <form
        className="search__form form"
        name="search-saved-movie-form"
        onSubmit={() => {}}
        noValidate
      >
        <input
          type="text"
          placeholder="Фильм"
          className="search__input"
          required
          name="searchRequest"
          value={""}
          onChange={() => {}}
        />
        <button type="submit" className="search__button">
          <img src={find} alt="find" />
        </button>
        <FilterCheckbox isMovieFilter={() => {}} onFilter={() => {}} />
      </form>

      <div className="search__line" />
    </section>
  );
};

export default SearchForm;
