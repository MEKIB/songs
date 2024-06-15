import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import {
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongSuccess,
  addSongFailure,
  editSongSuccess,
  editSongFailure,
  deleteSongSuccess,
  deleteSongFailure,
} from "./SongSlice";

// API calls
const fetchSongsApi = () => axios.get("http://localhost:5000/songs");
const addSongApi = (song) => axios.post("http://localhost:5000/songs", song);
const editSongApi = (song) =>
  axios.put(`http://localhost:5000/songs/${song.id}`, song);
const deleteSongApi = (id) => axios.delete(`http://localhost:5000/songs/${id}`);

// Sagas
function* fetchSongs() {
  try {
    const response = yield call(fetchSongsApi);
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* addSong(action) {
  try {
    const response = yield call(addSongApi, action.payload);
    yield put(addSongSuccess(response.data));
  } catch (error) {
    yield put(addSongFailure(error.message));
  }
}

function* editSong(action) {
  try {
    const response = yield call(editSongApi, action.payload);
    yield put(editSongSuccess(response.data));
  } catch (error) {
    yield put(editSongFailure(error.message));
  }
}

function* deleteSong(action) {
  try {
    yield call(deleteSongApi, action.payload);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

// Watchers
function* watchFetchSongs() {
  yield takeEvery("songs/fetchSongs", fetchSongs);
}

function* watchAddSong() {
  yield takeEvery("songs/addSong", addSong);
}

function* watchEditSong() {
  yield takeEvery("songs/editSong", editSong);
}

function* watchDeleteSong() {
  yield takeEvery("songs/deleteSong", deleteSong);
}

// Root saga
export default function* rootSaga() {
  yield all([
    watchFetchSongs(),
    watchAddSong(),
    watchEditSong(),
    watchDeleteSong(),
  ]);
}
