import { call, put, takeEvery } from "redux-saga/effects";
import { getSongsSuccess } from "./songSlice";

function* workGetSongsFetch() {
  const songs = yield call(() => fetch("http://localhost:4000/song"));
  const formattedSongs = yield songs.json();

  // const formattedSongsSHortened = formattedSongs.slice(0, 10);

  yield put(getSongsSuccess(formattedSongs.song));
}

function* songSaga() {
  yield takeEvery("songs/getSongsFetch", workGetSongsFetch);
}

export default songSaga;
