import { all } from "redux-saga/effects";

import mySaga from './Movies/saga';

export function* rootSaga(): any{
    return yield all([mySaga]);
}