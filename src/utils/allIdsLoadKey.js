export default (key) => (
  (state, payload) => {
    if (!payload[key]) return state

    const newState [
      ...state,
      ...Object.keys(payload[key])
          .map(id => parseInt(id))
    ]

    // remove duplicates
    return [...new Set(newState)]
  }
)
