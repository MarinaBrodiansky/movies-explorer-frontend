export const parseJSON = (string, defaultValue) => {
  try {

    if (typeof string !== 'string') {
      throw new Error('not a string')
    }

    return JSON.parse(string)
  } catch (e) {
    console.log({ e })
    return defaultValue
  }
}

export class RequestError extends Error {
  constructor(error) {
    const { message } = error
    super(message)

    return Object.assign({}, error)
  }
}

export const getMoviesTime = (duration) => {
  if (duration < 60) {
    return `${duration % 60}м`
  } else {
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`
  }
}