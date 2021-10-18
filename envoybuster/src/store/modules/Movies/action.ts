import { actions, Movie, patch } from "../../../utils/moviesTypes";

export const setMovies = (movies: Movie[]) => {
  return {
    type: actions.SET_MOVIES,
    movies,
  };
};

export const setMovie = (movie: Movie) => {
  return{
    type:actions.SET_MOVIE,
    movie
  };
};

export const setSuccess = (success: boolean) => {
  return{
    type: actions.SET_SUCCESS,
    success
  }
}

export const reqMovies = (url: string) => {
  return {
    type: actions.REQ_MOVIES,
    url
  };
};

export const addMovie = () => {
  return {
    type: actions.ADD_MOVIE,
  };
};

export const removeMovie = (id: number) => {
  return {
    type: actions.REMOVE_MOVIE,
    id
  };
};

export const updateMovie = (data: patch) => {
  return {
    type: actions.UPDATE_MOVIE,
    data
  };
};
