export default (key) => (
  (state, payload) => {
    if (!payload[key]) return state
    return {
      ...state,
      ...payload[key]
    }
  }
)
