import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

import './Movies.css';

const movies = [
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
    isSaved: false,
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
    isSaved: false,
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
    isSaved: false,
  },
];

const Movies = () => {
  return (
    <section className='movies__page'>
      <Header loggedIn={true} />
      <div className='movies__content'>
        <SearchForm />

        <MoviesCardList
          isSavedMoviesPage={false}
          movies={movies}
          savedMovies={movies}
        />
      </div>
      <Footer />
    </section>
  );
};

export default Movies;
