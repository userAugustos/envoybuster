import { call, all, put, takeLatest } from "redux-saga/effects";
import * as api from "../../../services/api";
import { actions, deleteProps, patch } from "../../../utils/moviesTypes";
import { setMovie, setMovies, setResponse } from "./action";


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
    const response = yield call(api.post, movie);
    
    yield put(setResponse(response));

  } catch (error) {
    console.log(error);
  }
}

function* removeMovie({ id }: deleteProps): any {
  try {
    const response = yield call(api.remove, id);

    // console.log(response);

    yield put(setResponse(response))
  } catch (error) {
    console.log(error);
  }
}

function* updateMovie({ id, data }: patch, type = []): any {
  try {
    const response = yield call(api.update, { id, data});

    yield put(setResponse(response))
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
