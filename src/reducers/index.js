export default function rootReducer(state={salons: [], count: 1, services: []}, action) {
  switch (action.type) {
    case "RECEIVE_SALONS":
      let salons = action && action.salons && action.salons.salons || [];
      return {
        ...state,
        salons: [...state.salons, ...salons],
        count: ++state.count,
        total: action.salons.total,
      }
    case "RECEIVE_SALON":
      let salon = action && action.salon || [];
      return {
        ...state,
        salon: [salon]
      }
    case "RECEIVE_SERVICE":
      let services = action && action.services || [];
      return {
        ...state,
        services: [services]
      }

    default:
      return state
  }
}
