import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../state/user';

import './App.css';

import {
  JWT_TOKEN_KEY,
  MOVIES_KEY,
  MOVIES_PAGE_KEY,
  MOVIES_SAVED_PAGE_KEY,
  MOVIES_SEARCH_KEY,
  FILTRED_MOVIES_KEY,
  RESET_SEARCH_STATE,
  SAVED_MOVIES_KEY,
} from '../../constants';
import { parseJSON } from '../../utils/helpers';
import Header from '../Header/Header';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Login from '../Login/Login';
import Main from '../Main';
import Movies from '../Movies/Movies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { auth } from '../../utils/auth';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Spinner from '../Spinner/Spinner';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const defaultStateRequestErrors = {
    signIn: {},
    signUp: {},
    profile: {},
    movies: {},
  };

  const LOAD_DELAY = 500;

  // state
  const [error, setError] = useState();
  const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY) || '');
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isSpinner, setSpinner] = useState(false);
  const [isProfileSaved, setIsProfileSaved] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [requestErrors, setRequestErrors] = useState(defaultStateRequestErrors);

  const includeHeader = ({ pathname }) =>
    Boolean(['/', '/movies', '/saved-movies', '/profile'].includes(pathname));
  const includeFooter = ({ pathname }) =>
    Boolean(['/', '/movies', '/saved-movies'].includes(pathname));

  useEffect(() => {
    localStorage.setItem(JWT_TOKEN_KEY, token);
  }, [token]);

  useEffect(() => {
    const checkToken = async () => {
      try {
        setLoading(true);
        const user = await auth(token).me();
        setUser(user);
        setLoggedIn(true);
        navigate(`${location.pathname}${location.search}`);
      } catch (e) {
        if (e.status === 404) {
          localStorage.removeItem(JWT_TOKEN_KEY);
        }
      } finally {
        setLoading(false);
      }
    };

    if (!loggedIn && token) {
      checkToken();
    }

    setLoading(false);
  }, [loggedIn, token]);

  useEffect(() => {
    setRequestErrors(defaultStateRequestErrors);
  }, [location]);

  useEffect(() => {
    if (loggedIn) {
      if (!user) {
        setLoading(true);
        auth(token).me().then(user => {
          setUser(user);
        }).finally(() => setLoading(false))
      }

      const localMovies = parseJSON(localStorage.getItem(MOVIES_KEY), []);

      if (Array.isArray(localMovies) && localMovies.length) {
        setMovies(localMovies);
      } else {
        setLoading(true);
        moviesApi()
          .getMovies()
          .then(m => setMovies(m))
          .catch(err => {
            setRequestErrors({ ...requestErrors, movies: err });
          })
          .finally(() => setTimeout(() => setLoading(false), LOAD_DELAY));
      }

      setLoading(true);
      mainApi(token)
        .getMovies()
        .then(m => {
          localStorage.setItem(SAVED_MOVIES_KEY, JSON.stringify(m));
          setSavedMovies(m.filter(s => s.owner._id === user._id));
        })
        .catch(err => {
          setRequestErrors({ ...requestErrors, movies: err });
        })
        .finally(() => setTimeout(() => setLoading(false), LOAD_DELAY));
    }
  }, [loggedIn, token]);

  useEffect(() => {
    localStorage.setItem(MOVIES_KEY, JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    localStorage.setItem(SAVED_MOVIES_KEY, JSON.stringify(savedMovies));
  }, [savedMovies]);

  /**
   * SignUp Handler
   */
  const handleSignUp = async ({ email, name, password }) => {
    try {
      setSpinner(true);
      await auth().signup({ email, name, password });
      await handleSignIn({ email, password });
      navigate('/signin');
    } catch (e) {
      console.log({ e });
      setRequestErrors({ ...requestErrors, signUp: e });
    } finally {
      setTimeout(() => setSpinner(false), LOAD_DELAY);
    }
  };

  /**
   * SignIn Handler
   */
  const handleSignIn = async payload => {
    try {
      setSpinner(true);
      const { token } = await auth().signin(payload);
      setToken(token);
      setLoggedIn(true);
      navigate('/movies');
    } catch (e) {
      setRequestErrors({ ...requestErrors, signIn: e });
    } finally {
      setTimeout(() => setSpinner(false), LOAD_DELAY);
    }
  };

  /**
   * SignOut Handler
   *
   * При обработке данных хранилища предусмотрите ситуацию, при которой
   * данных в нём может и не быть. Например, по какой-то причине хранилище
   * было очищено или зашёл новый пользователь, который ещё ни разу не искал фильмы.
   *
   * При отсутствии данных в хранилище приложение не должно падать с ошибкой.
   * Также не забудьте при выходе пользователя с сайта вызывать очистку хранилища,
   * иначе другой пользователь зайдёт на сайт и увидит запрос предыдущего пользователя,
   * что не всегда допустимо.
   */
  const handleSignOut = async () => {
    try {
      setSpinner(true);
      await auth(localStorage.getItem(JWT_TOKEN_KEY)).signout();
      setToken('');
      setLoggedIn(false);
      localStorage.setItem(MOVIES_PAGE_KEY, '0');
      localStorage.setItem(MOVIES_SAVED_PAGE_KEY, '0');
      localStorage.setItem(MOVIES_KEY, JSON.stringify([]));
      localStorage.setItem(SAVED_MOVIES_KEY, JSON.stringify([]));
      localStorage.setItem(FILTRED_MOVIES_KEY, JSON.stringify([]));
      localStorage.setItem(
        MOVIES_SEARCH_KEY,
        JSON.stringify(RESET_SEARCH_STATE),
      );
    } catch (e) {
      console.log({ e });
    } finally {
      setSpinner(false);
    }
  };

  /**
   * UpdateUser Handler
   */
  const handleUpdateUser = async payload => {
    try {
      setIsProfileSaved(false);
      setSpinner(true);
      const user = await auth(token).update(payload);
      setUser(user);
      setIsProfileSaved(true);
    } catch (e) {
      setRequestErrors({ ...requestErrors, profile: e });
    } finally {
      setTimeout(() => setSpinner(false), LOAD_DELAY);
    }
  };

  const handleSaveMovie = async movie => {
    try {
      setSpinner(true);
      const savedMovie = await mainApi(token).saveMovie(movie);
      if (Array.isArray(savedMovies)) {
        setSavedMovies([...savedMovies, savedMovie]);
      } else {
        setSavedMovies([savedMovie]);
      }
    } catch (e) {
    } finally {
      setTimeout(() => setSpinner(false), LOAD_DELAY);
    }
  };

  const handleDeleteMovie = async movie => {
    try {
      const { _id } = movie;
      setSpinner(true);
      await mainApi(token).deleteMovie(_id);
      if (Array.isArray(savedMovies)) {
        setSavedMovies([...savedMovies.filter(v => v._id !== _id)]);
      }
    } catch (e) {
      setError(e);
      console.log({ e });
      setRequestErrors({ ...requestErrors, movies: e });
    } finally {
      setTimeout(() => setSpinner(false), LOAD_DELAY);
    }
  };

  return (
    <div className="App">
      {isLoading ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={{ user }}>
          {includeHeader(location) ? <Header loggedIn={loggedIn} /> : ''}
          <main>
            {isSpinner ? <Spinner /> : ''}
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/signup"
                element={
                  <Register
                    onSignUp={handleSignUp}
                    loggedIn={loggedIn}
                    requestErrors={requestErrors}
                  />
                }
              />
              <Route
                path="/signin"
                element={
                  <Login
                    onSignIn={handleSignIn}
                    loggedIn={loggedIn}
                    requestErrors={requestErrors}
                  />
                }
              />
              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    component={Movies}
                    loggedIn={loggedIn}
                    movies={movies}
                    savedMovies={savedMovies}
                    onSaveMovie={handleSaveMovie}
                    onDeleteMovie={handleDeleteMovie}
                    requestErrors={requestErrors}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    component={SavedMovies}
                    movies={savedMovies}
                    loggedIn={loggedIn}
                    onDeleteMovie={handleDeleteMovie}
                    requestErrors={requestErrors}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    component={Profile}
                    isProfileSaved={isProfileSaved}
                    setIsProfileSaved={setIsProfileSaved}
                    loggedIn={loggedIn}
                    onSignOut={handleSignOut}
                    onUpdateUser={handleUpdateUser}
                    requestErrors={requestErrors}
                  />
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>

            <InfoTooltip isOpen={false} onClose={() => {}} message={error} />
          </main>
          {includeFooter(location) ? <Footer /> : ''}
        </CurrentUserContext.Provider>
      )}
    </div>
  );
};

export default App;
