import * as types from '../action/actionTypes';

const initialState = {
  isFetching: false,
  movieDetails: [],
};

export default function getMovieListReducer(state = initialState, action) {
  switch (action.type) {
    case types.MOVIES_LIST_REQUEST:
      return { ...state, isFetching: true };

    case types.MOVIES_LIST_SUCCESS:
      return { isFetching: false, movieDetails: action.movieDetails };

    case types.MOVIES_LIST_ERROR:
      return { ...state, isFetching: false, error: action.message };

    default:
      return state;
  }
}
