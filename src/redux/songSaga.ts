import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  addSongFailure,
  addSongSuccess,
  deleteSongFailure,
  deleteSongSuccess,
  getSongsFailure,
  getSongsSuccess,
} from "./songSlice";
import { addSong, deleteSong, getSong, getSongs, updateSong } from "../lib/api";
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

function* getSongSaga({ payload }: { payload: string }) {
  try {
    const songs: ISong = yield call(getSong, payload);

    yield put(getSongsSuccess(songs.song));
  } catch (error) {
    yield put(getSongsFailure(error));
  }
}
function* watchGetSong() {
  yield takeLatest("songs/getSongs", getSongSaga);
}

function* addSongSaga({
  payload,
}: {
  payload: { song: string; artist: string; album: string; genre: string };
}) {
  try {
    const song: ISong = yield call(addSong, payload);

    yield put(addSongSuccess(song.song));
  } catch (error) {
    yield put(addSongFailure(error));
  }
}

function* watchAddSong() {
  yield takeLatest("songs/addSong", addSongSaga);
}
function* updateSongSaga({
  payload,
  id,
}: {
  payload: { song: string; artist: string; album: string; genre: string };
  id: string;
}) {
  try {
    const song: ISong = yield call(updateSong, id, payload);

    yield put(addSongSuccess(song.song));
  } catch (error) {
    yield put(addSongFailure(error));
  }
}

function* watchUpdateSong() {
  yield takeLatest("songs/addSong", updateSongSaga);
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
  yield all([
    fork(watchGetSongs),
    fork(watchGetSong),
    fork(watchAddSong),
    fork(watchUpdateSong),
    fork(watchDeleteSong),
  ]);
}

export default rootSaga;
