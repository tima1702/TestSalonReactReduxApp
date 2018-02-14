export default function rootReducer(state={salons: [], count: 0}, action) {
  switch (action.type) {
    case "RECEIVE_SALONS":
      let salons = action && action.salons && action.salons.salons || [];
      return {
        ...state,
        salons: [...state.salons, ...salons],
        count: ++state.count
      }
    case "RECEIVE_SALON":
      let salon = action && action.salon || [];
      return {
        ...state,
        salon: [salon]
      }

    default:
      return state
  }
}
