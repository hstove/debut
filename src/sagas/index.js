import { takeEvery } from 'redux-saga/effects'
import { REQUEST_SESSION_USER, REQUEST_ALL_USERS } from 'actions'
import fetchSessionUserSaga from './user/fetchSessionUser'
import fetchAllUsersSaga from './user/fetchAllUsers'

// use them in parallel
export default function* rootSaga() {
  yield takeEvery(REQUEST_SESSION_USER, fetchSessionUserSaga)
  yield takeEvery(REQUEST_ALL_USERS, fetchAllUsersSaga)
}
