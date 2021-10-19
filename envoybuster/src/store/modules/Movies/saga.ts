import { call, all, put, takeLatest } from "redux-saga/effects";
import * as api from "../../../services/api";
import { actions, deleteProps, Movie, patch } from "../../../utils/moviesTypes";
import { setMovie, setMovies, setSuccess } from "./action";


export interface ReqProps {
  url: string,
  type: Array<any>
}

function* reqMovies({ url }: ReqProps): any {
  try {
    const data = yield call(api.get, url);

    Array.isArray(data) ? yield put(setMovies(data)) : yield put(setMovie(data));
    
  } catch (error) {
    console.log(error);
  }
}

function* addMovie({ movie }: any): any {
  try {

    console.log(movie);
    const response = yield call(api.post, movie);

    yield put(setSuccess(response));

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function* removeMovie({ id }: deleteProps): any {
  try {
    const response = yield call(api.remove, id);

    console.log(response);

    yield put(setSuccess(response))
  } catch (error) {
    console.log(error);
  }
}

function* updateMovie({ id, data }: patch, type = []): any {
  try {
    const response = yield call(api.update, { id, data});

    
    yield put(setSuccess(response))
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest(actions.REQ_MOVIES, reqMovies),
  takeLatest(actions.ADD_MOVIE, addMovie),
  takeLatest(actions.REMOVE_MOVIE, removeMovie),
  takeLatest(actions.UPDATE_MOVIE, updateMovie)
]);
