import { call, put, takeLatest } from "redux-saga/effects";
import { getSongsSuccess } from "./songSlice";
import { getSongs } from "../lib/api";


function* workGetSongsFetch() {
  const songs: ISongs = yield call(getSongs);

  yield put(getSongsSuccess(songs.song));
}

function* songSaga() {
  yield takeLatest("songs/getSongsFetch", workGetSongsFetch);
}

export default songSaga;
