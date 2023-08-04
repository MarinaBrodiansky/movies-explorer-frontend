import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

const MoviesCardList = ({ movies }) => {
  return (
    <section className="cards">
      <ul className="cards__list">
        {movies.map((movie, i) => {
          return <MoviesCard key={i} movie={movie} />;
        })}
      </ul>
      <button className="cards__button">Ещё</button>
    </section>
  );
};

export default MoviesCardList;
