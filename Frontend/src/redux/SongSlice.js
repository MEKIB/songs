
import { createSlice } from '@reduxjs/toolkit';
//if we are in node js enviroment we use const createSlice=require("@reduxjs/toolkit").createSlice,
// Create a slice for the songs state
const songSlice = createSlice({
  name: 'songs', // The name of the slice
  initialState: {
    list: [], // Initial state value for the list of songs
  }, 
  reducers: {
    // Reducer to add a song to the list
    addSong: (state, action) => {
      state.list.push(action.payload);
    },
    // Reducer to edit an existing song in the list
    editSong: (state, action) => {
      const { id, title, artist } = action.payload;
      const existingSong = state.list.find(song => song.id === id);
      if (existingSong) {
        existingSong.title = title;
        existingSong.artist = artist;
      }
    },
    // Reducer to delete a song from the list
    deleteSong: (state, action) => {
      const id = action.payload;
      state.list = state.list.filter(song => song.id !== id);
    },
  },
});

// Export actions and the reducer
export const { addSong, editSong, deleteSong } = songSlice.actions;
export default songSlice.reducer;
