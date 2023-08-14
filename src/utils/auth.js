import { RequestError } from "./helpers"

class Auth {
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

    throw new  RequestError({
      status: res.status,
      ...await res.json()
    })
  }

  /**
   * 
   */
  async signin (payload) {
    const res = await fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify(payload)
    })

    return this._response(res)
  }
  /**
   * 
   */
  async signup(payload) {
    const res = await fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify(payload)
    })

    return this._response(res)
  }
  /**
   * 
   */
  async signout() {
    const res = await fetch(`${this._url}/signout`, {
      method: 'DELETE',
      headers: this._headers
    })

    return this._response(res)
  }
  /**
   * 
   */
  async me() {
    const res = await fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })

    return this._response(res)
  }
/**
 * 
 * @param {*} user 
 */
  async update({ name, email }) {
    const res = await fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email })
    })

    return this._response(res)
  }
}

export const auth = (token) => new Auth({
  url: process.env.REACT_APP_AUTH_API || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
})