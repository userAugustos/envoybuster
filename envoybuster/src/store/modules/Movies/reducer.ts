import { actions } from "../../../utils/moviesTypes";

export default function Movies(state = [], action: any){
  switch (action.type) {
    case actions.SET_MOVIES:
      return {
        movies: action.movies
      }
  
    default:
      return state;
  }
}