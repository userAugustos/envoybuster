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

export const setResponse = (response: any) => {
  return{
    type: actions.SET_RESPONSE,
    response
  }
}

export const reqMovies = (url: string) => {
  return {
    type: actions.REQ_MOVIES,
    url
  };
};

export const addMovie = (movie: any) => {
  return {
    type: actions.ADD_MOVIE,
    movie
  };
};

export const removeMovie = (id: number) => {
  return {
    type: actions.REMOVE_MOVIE,
    id
  };
};

export const updateMovie = ({id, data}: patch) => {
  return {
    type: actions.UPDATE_MOVIE,
    id,
    data
  };
};
