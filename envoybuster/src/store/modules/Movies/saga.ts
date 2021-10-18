import { call, all, put, takeLatest } from "redux-saga/effects";
import * as api from "../../../services/api";
import { actions, deleteProps, Movie, patch } from "../../../utils/moviesTypes";
import { setMovies } from "./action";


function* reqMovies(): any {
  try {
    const data = yield call(api.get);

    yield put(setMovies(data));
  } catch (error) {
    console.log(error);
  }
}

function* addMovie(movie: Movie): any {
  try {

    const response = yield call(api.post, movie);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function* removeMovie({ id }: deleteProps): any {
  try {
    const response = yield call(api.remove, id);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function* updateMovie({ id, data }: patch, type = []): any {
  try {
    const response = yield call(api.update, { id, data});

    console.log(response);
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
