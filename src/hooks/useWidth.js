import { useEffect, useState } from 'react'

/**
 * ```
 * Также пользователь может изменять ширину экрана своего устройства.
 * Например, переводя телефон из портретной ориентации в альбомную и наоборот.
 * Это событие можно отслеживать с помощью слушателя “resize”.
 * Чтобы колбэк-функция слушателя не срабатывала слишком часто,
 * например при изменении ширины экрана в отладчике,
 * мы рекомендуем установить setTimeout
 * на вызов этой функции внутри слушателя “resize”.
 * ```
 */
export const useWidth = (delay = 100) => {
  
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    let timeout = false
    const getWidth = () => setWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      clearTimeout(timeout)
      timeout= setTimeout(getWidth, delay)
    })
    return () => {
      window.removeEventListener('resize', getWidth)
    }
  })

  return width
}

/**
 * ```
 * Ширина 1280px — 4 ряда карточек. Кнопка «Ещё» загружает дополнительный ряд карточек.
 * Ширина 768px — 4 ряда карточек. Кнопка «Ещё» загружает дополнительный ряд карточек.
 * Ширина от 320px до 480px — 5 карточек по 1 в ряд. Кнопка «Ещё» загружает по 2 карточки.
 * ```
 */
export const maxMoviesByWidth = width => {
  if (width <= 425) {
    return ((col, row) => [col * row, col * 2])(1, 5)
  } else if (width <= 900) {
    return ((col, row) => [col * row, col])(2, 4)
  }

  return ((col, row) => [col * row, col])(3, 4)
}
