import * as types from './actionTypes';

export function getMovieDetails() {
  return {
    type: types.MOVIES_LIST_REQUEST,
  };
}
