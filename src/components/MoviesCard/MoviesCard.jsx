import "./MoviesCard.css";

const MoviesCard = ({ movie }) => {
  return (
    <div className="card">
      <div className="card__description">
        <span className="card__name">Movie</span>
        <span className="card__duration">2 hours</span>
      </div>
      <button
        type="button"
        className={`card__button ${
          movie.isSaved ? "card__button_saved" : "card__button_unsaved"
        }`}
      />
      <a className="card__link" target="_blank" rel="noreferrer" href="">
        <img
          src={movie.img}
          alt="Обложка фильма: Обложка"
          className="card__image"
        />
      </a>
    </div>
  );
};

export default MoviesCard;
