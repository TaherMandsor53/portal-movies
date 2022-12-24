import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../action/actionTypes';
import getMovieDetails from '../api/api';

function* MovieListSaga(action) {
  try {
    const movieDetail = yield call(getMovieDetails);
    yield put({
      type: types.MOVIES_LIST_SUCCESS,
      movieDetails: movieDetail.data,
    });
  } catch (e) {
    yield put({ type: types.MOVIES_LIST_ERROR, message: e.message });
  }
}

function* getMovieListSaga() {
  yield takeLatest(types.MOVIES_LIST_REQUEST, MovieListSaga);
}

export default getMovieListSaga;
