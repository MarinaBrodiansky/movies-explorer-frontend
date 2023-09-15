import { RequestError } from './helpers'
export const MOVIE_URL = 'https://api.nomoreparties.co'

class MoviesApi {
  constructor({ url }) {
    this._url = url
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
    const resp = await fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return this._response(resp)
  }
}


export const moviesApi = () => new MoviesApi({
  url: MOVIE_URL
})