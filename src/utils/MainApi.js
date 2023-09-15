import { MOVIE_URL } from './MoviesApi'
import { RequestError } from './helpers'

class MainApi {
  constructor({ url, headers = {
    'Content-Type': 'application/json'
  } }) {
    this._url = url
    this._headers = headers
  }

  async _response(res) {
    if (res.ok) {
      return await res.json()
    }

    throw new RequestError({
      status: res.status,
      ...await res.json()
    })
  }

  async getMovies() {
    const res = await fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers
    })

    return this._response(res)
  }

  async saveMovie({
    id,
    nameRU,
    nameEN,
    director,
    country,
    year,
    duration,
    description,
    trailerLink,
    // created_at,
    // updated_at,
    image,
  }) {
    const res = await fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: `${MOVIE_URL}${image.url}`,
        trailerLink: trailerLink,
        thumbnail: `${MOVIE_URL}${image.formats.thumbnail.url}`,
        movieId: id,
        nameRU,
        nameEN
      })
    })

    return this._response(res)
  }

  async deleteMovie(id) {
    const res = await fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })

    return this._response(res)
  }

}

export const mainApi = (token = '') => new MainApi({
  url: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
})