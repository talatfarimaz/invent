import * as actionTypes from "../actionTypes";
import {SearchedMovieModel} from "../../models/SearchedMovieModel";


const INITIAL_APP_STATE = {
  searchedMovies: null,
  selectedMovie: null,
};

export default (state = INITIAL_APP_STATE, action: any) => {
  switch (action.type) {
    case actionTypes.SEARCHED_MOVIES:
      return { ...state, searchedMovies: action.payload };
    case actionTypes.SELECTED_MOVIE:
      return { ...state, selectedMovie: action.payload };
    default:
      return state;
  }
};
