import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import "./SavedMovies.css";

const SavedMovies = () => {
  return (
    <section className="savedMovies__page">
      <Header loggedIn={true} />
      <div className="savedMovies__content">
        <SearchForm />
        <MoviesCardList
          isSavedMoviesPage={true}
          movies={[]}
          savedMovies={[]}
          onDelete={() => {}}
        />
      </div>
      <Footer />
    </section>
  );
};

export default SavedMovies;
