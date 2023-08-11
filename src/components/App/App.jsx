import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';

import Main from '../Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = () => {
  const location = useLocation()
  const loggedIn = ({pathname}) => Boolean(pathname !=='/')
  const includeHeader = ({pathname}) => Boolean(
    ['/', '/movies', '/saved-movies', '/profile'].includes(pathname)
  )
  const includeFooter = ({pathname}) => Boolean(
    ['/', '/movies', '/saved-movies'].includes(pathname)
  )

  return (
    <div className='App'>
      {includeHeader(location) ? (<Header loggedIn={loggedIn(location)} />) : ('')}      
      <main>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </main>
      { includeFooter(location) ? (<Footer />) : ('') }
      <InfoTooltip isOpen={false} onClose={() => {}} message={'hello'} />

    </div>
  );
};

export default App;
