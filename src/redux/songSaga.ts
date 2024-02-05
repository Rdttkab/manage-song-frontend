import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  deleteSongFailure,
  deleteSongSuccess,
  getSongsFailure,
  getSongsSuccess,
} from "./songSlice";
import { deleteSong, getSongs } from "../lib/api";
import { ISong, ISongs } from "../types";

function* getSongsSaga() {
  try {
    const songs: ISongs = yield call(getSongs);

    yield put(getSongsSuccess(songs.song));
  } catch (error) {
    yield put(getSongsFailure(error));
  }
}
function* watchGetSongs() {
  yield takeLatest("songs/getSongs", getSongsSaga);
}

function* deleteSongSaga({ payload }: { payload: string }) {
  try {
    const song: ISong = yield call(deleteSong, payload);

    yield put(deleteSongSuccess(song.song));
  } catch (error) {
    yield put(deleteSongFailure(error));
  }
}

function* watchDeleteSong() {
  yield takeLatest("songs/deleteSong", deleteSongSaga);
}

function* rootSaga() {
  yield all([fork(watchGetSongs), fork(watchDeleteSong)]);
}

export default rootSaga;
