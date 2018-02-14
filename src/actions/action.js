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

export const RECEIVE_SERVICES = 'RECEIVE_SERVICES'
function receiveServices(response) {
  return {
    type: RECEIVE_SERVICES,
    services: response
  }
}

// Тут мы встречаемся с нашим первым thunk-генератором действий! Хотя его содержимое
// отличается, вы должны использовать его, как и любой другой генератор действий:
// store.dispatch(fetchPosts('reactjs'))

export function fetchSalons (page) {

  return function (dispatch) {

    return http.get(`/salons?per_page=25&page=${page}`)
      .then(response =>  dispatch(receiveSalons(response)))

  }
}

export function fetchSalon (id) {

  return function (dispatch) {

    return http.get(`/salons/${id}`)
      .then(response =>  dispatch(receiveSalon(response)))

  }
}

export function fetchServices(salon_id) {

  return function (dispatch) {

    return http.get(`/salons/${salon_id}/services`)
      .then(response =>  dispatch(receiveServices(response)))

  }
}

