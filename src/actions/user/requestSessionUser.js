import { REQUEST_SESSION_USER } from 'actions'

const requestSessionUser = (userSession) => {
  return { type: REQUEST_SESSION_USER, payload: userSession }
};

export default requestSessionUser
