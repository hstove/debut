import axios from 'axios'
import { put, call } from 'redux-saga/effects'
import { FETCH_SESSION_USER_SUCCESS, FETCH_SESSION_USER_FAIL } from 'actions'

const fetchSessionUser = (action) => {
  return axios.get('https://debut-3fcee.firebaseio.com/users.json')
}

function* fetchSessionUserSaga(action) {
  try {
    const data = yield call(fetchSessionUser, action);
    const users = []

    for (const key in data.data) {
      users.push({ ...data[key], id: key })
    }

    yield put({ type: FETCH_SESSION_USER_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: FETCH_SESSION_USER_FAIL });
  }
}

export default fetchSessionUserSaga
