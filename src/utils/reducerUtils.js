export const createReducer = (initialState, fnMap) => (
  (state = initialState, { type, payload }) => {
    const handler = fnMap[type]
    return handler ? handler(state, payload) : state
  }
)

export const byIdLoadKey = (key) => (
  (state, payload) => {
    if (!payload[key]) return state
    return {
      ...state,
      ...payload[key]
    }
  }
)

export const allIdsLoadKey = (key) => (
  (state, payload) => {
    if (!payload[key]) return state

    const newState = [
      ...state,
      ...Object.keys(payload[key])
          .map(id => parseInt(id))
    ]

    // remove duplicates
    return [...new Set(newState)]
  }
)
