import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

const MoviesCardList = ({ movies, isShowSaveBtn, isShowDeleteBtn, isShowMoreButton = true }) => {
  return (
    <section className="cards">
      <ul className="cards__list">
        {movies.map((movie, i) => {
          return (
            <MoviesCard
              key={i}
              isShowSaveBtn={isShowSaveBtn}
              movie={movie}
              isShowDeleteBtn={isShowDeleteBtn}
            />
          );
        })}
      </ul>
      {isShowMoreButton && (
        <button className="cards__button" type="button">
          Ещё
        </button>
      )}
    </section>
  );
};

export default MoviesCardList;
