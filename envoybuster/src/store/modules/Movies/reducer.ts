import { actions } from "../../../utils/moviesTypes";

export default function Movies(state = [], action: any){
  switch (action.type) {
    case actions.SET_MOVIES:
      return {
        ...state,
        movies: action.movies
      }
    case actions.SET_MOVIE:
      return{
        ...state,
        movie: action.movie
      }
    
    case actions.SET_RESPONSE:
      return{
        ...state,
        response: action.response
      }
    default:
      return state;
  }
}