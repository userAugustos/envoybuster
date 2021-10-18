import { actions } from "../../../utils/moviesTypes";

export default function Movies(state = [], action: any){
  switch (action.type) {
    case actions.SET_MOVIES:
      return {
        movies: action.movies
      }
    case actions.SET_MOVIE:
      return{
        ...state,
        movie: action.movie
      }
    
    case actions.SET_SUCCESS:
      return{
        ...state,
        success: action.success
      }
    default:
      return state;
  }
}