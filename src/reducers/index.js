export default function rootReducer(state={salons: [], count: 1, services: [], total: 0}, action) {
  switch (action.type) {
    case "RECEIVE_SALONS":
      let salons = action && action.response && action.response.salons || [];

      return {
        ...state,
        salons: [...state.salons, ...salons],
        count: ++state.count,
        total: action.response && action.response.total || 0,
      }
    case "RECEIVE_SALON":
      let salon = action && action.salon || [];
      return {
        ...state,
        salon: salon
      }
    case "RECEIVE_SERVICES":
      let services = action && action.services || [];
      return {
        ...state,
        services: services
      }

    default:
      return state
  }
}
