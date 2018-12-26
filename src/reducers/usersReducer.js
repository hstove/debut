const defaultSession = {
  users: []
}

export default function sessionReducer(state = defaultSession, action) {
  switch (action.type) {
    case 'FETCH_ALL_USERS_SUCCESS':
      return { ...state, users: action.payload }
    default:
      return state
  }
}
