import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

import "./Movies.css";

const movies = [
  {
    name: "movie",
    duration: "movie",
    img: "https://www.thenews.com.pk/assets/uploads/updates/2022-12-19/1021612_814112_Untitled-133_updates.jpg",
    isSaved: true,
  },
  {
    name: "movie",
    duration: "movie",
    img: "https://www.thenews.com.pk/assets/uploads/updates/2022-12-19/1021612_814112_Untitled-133_updates.jpg",
    isSaved: false,
  },
  {
    name: "movie",
    duration: "movie",
    img: "https://www.thenews.com.pk/assets/uploads/updates/2022-12-19/1021612_814112_Untitled-133_updates.jpg",
    isSaved: true,
  },
  {
    name: "movie",
    duration: "movie",
    img: "https://www.thenews.com.pk/assets/uploads/updates/2022-12-19/1021612_814112_Untitled-133_updates.jpg",
    isSaved: false,
  },
  {
    name: "movie",
    duration: "movie",
    img: "https://www.thenews.com.pk/assets/uploads/updates/2022-12-19/1021612_814112_Untitled-133_updates.jpg",
    isSaved: true,
  },
];

const Movies = () => {
  return (
    <>      
      <section className="movies">
        <div className="movies__content">
          <SearchForm />

          <MoviesCardList
            isSavedMoviesPage={false}
            movies={movies}
            savedMovies={movies}
          />
        </div>
      </section>     
    </>
  );
};

export default Movies;
