import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "songs",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchSongs: (state) => {
      state.loading = true;
    },
    fetchSongsSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchSongsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addSong: (state, action) => {
      state.loading = true;
    },
    addSongSuccess: (state, action) => {
      state.loading = false;
      state.list.push(action.payload);
    },
    addSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    editSong: (state, action) => {
      state.loading = true;
    },
    editSongSuccess: (state, action) => {
      state.loading = false;
      const { id, title, body } = action.payload;
      const existingSong = state.list.find((song) => song.id === id);
      if (existingSong) {
        existingSong.title = title;
        existingSong.body = body;
      }
    },
    editSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSong: (state, action) => {
      state.loading = true;
    },
    deleteSongSuccess: (state, action) => {
      state.loading = false;
      state.list = state.list.filter((song) => song.id !== action.payload);
    },
    deleteSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSong,
  addSongSuccess,
  addSongFailure,
  editSong,
  editSongSuccess,
  editSongFailure,
  deleteSong,
  deleteSongSuccess,
  deleteSongFailure,
} = songSlice.actions;

export default songSlice.reducer;
