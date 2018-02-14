import http from '../services/http'

export const RECEIVE_SALONS = 'RECEIVE_SALONS'
function receiveSalons(response) {
  return {
    type: RECEIVE_SALONS,
    salons: response
  }
}

export const RECEIVE_SALON = 'RECEIVE_SALON'
function receiveSalon(response) {
  return {
    type: RECEIVE_SALON,
    salon: response
  }
}

// Тут мы встречаемся с нашим первым thunk-генератором действий! Хотя его содержимое
// отличается, вы должны использовать его, как и любой другой генератор действий:
// store.dispatch(fetchPosts('reactjs'))

export function fetchSalons (page) {

  // Thunk middleware знает, как обращаться с функциями.
  // Он передает метод действия в качестве аргумента функции,
  // т.к. это позволяет отправить действие самостоятельно.

  return function (dispatch) {

    // Первая отправка: состояние приложения обновлено,
    // чтобы сообщить, что запускается вызов API.

    // dispatch(requestPosts())

    // Функция, вызываемая Thunk middleware, может возвращать значение,
    // которое передается как возвращаемое значение метода dispatch.

    // В этом случае мы возвращаем Promise.
    // Thunk middleware не требует этого, но это удобно для нас.

    return http.get(`/salons?per_page=25&page=${page}`)
      .then(response =>  dispatch(receiveSalons(response)))

  }
}

export function fetchSalon (id) {

  // Thunk middleware знает, как обращаться с функциями.
  // Он передает метод действия в качестве аргумента функции,
  // т.к. это позволяет отправить действие самостоятельно.

  return function (dispatch) {

    // Первая отправка: состояние приложения обновлено,
    // чтобы сообщить, что запускается вызов API.

    // dispatch(requestPosts())

    // Функция, вызываемая Thunk middleware, может возвращать значение,
    // которое передается как возвращаемое значение метода dispatch.

    // В этом случае мы возвращаем Promise.
    // Thunk middleware не требует этого, но это удобно для нас.

    return http.get(`/salons/${id}`)
      .then(response =>  dispatch(receiveSalon(response)))

  }
}

