import { combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import usersReducer from './usersReducer'

const reducers = combineReducers({
  session: sessionReducer,
  user: usersReducer,
})

export default reducers
