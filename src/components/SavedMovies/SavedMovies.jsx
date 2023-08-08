import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
// import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

const savedMovies = [
  {
    name: 'movie',
    duration: 'movie',
    img: 'https://www.thenews.com.pk/assets/uploads/updates/2022-12-19/1021612_814112_Untitled-133_updates.jpg',
    isSaved: true,
  },
  {
    name: 'movie',
    duration: 'movie',
    img: 'https://www.thenews.com.pk/assets/uploads/updates/2022-12-19/1021612_814112_Untitled-133_updates.jpg',
    isSaved: true,
  },
  {
    name: 'movie',
    duration: 'movie',
    img: 'https://www.thenews.com.pk/assets/uploads/updates/2022-12-19/1021612_814112_Untitled-133_updates.jpg',
    isSaved: true,
  },
]
const SavedMovies = () => {
  return (
    <section className='savedMovies__page'>
      <Header loggedIn={true} />
      <div className='savedMovies__content'>
        <SearchForm />
        <MoviesCardList
          isSavedMoviesPage={true}
          movies={savedMovies}
          isShowSaveBtn={false}
          isShowDeleteBtn={true}
          savedMovies={[]}
          onDelete={() => {}}
          isShowMoreButton={false}
        />
      </div>
      <Footer />
    </section>
  );
};

export default SavedMovies;