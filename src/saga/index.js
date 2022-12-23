import { fork } from 'redux-saga/effects';
import getMovieListSaga from './movieListSaga';

function* sagas() {
  yield fork(getMovieListSaga);
}

export default sagas;
