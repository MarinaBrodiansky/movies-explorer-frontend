import { SHORTS_MOVIES_TIME } from '../constants';
/**
 * Filter search movies
 */
export const filterSearch = ({ movies, setFiltredMovies, search }) => {
  const filtred = movies.filter(({ nameRU, nameEN, duration }) => {
    return (
      (nameRU.toLowerCase().includes(search.s.toLowerCase()) ||
        nameEN.toLowerCase().includes(search.s.toLowerCase())) &&
      (search.shorts ? duration <= SHORTS_MOVIES_TIME : true)
    );
  });

  setFiltredMovies(filtred);
};
