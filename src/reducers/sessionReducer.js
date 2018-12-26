const defaultSession = {
  user: {}
}

export default function sessionReducer(state = defaultSession, action) {
  switch (action.type) {
    case 'FETCH_SESSION_USER_SUCCESS':
      return { ...state, user: action.payload }
    default:
      return state
  }
}
