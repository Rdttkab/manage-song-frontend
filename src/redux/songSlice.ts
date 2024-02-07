import { createSlice } from "@reduxjs/toolkit";
import { Song, SongState } from "../types";

const initialState: SongState = {
  songs: [],
  isLoading: false,
  error: "",
};

export const songSlice = createSlice({
  name: "songs",
  initialState: initialState,
  reducers: {
    getSongs: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    getSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    getSongsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    addSong: (state, action) => {
      console.log(action.payload);
      state.isLoading = true;
      state.error = "";
    },
    addSongSuccess: (state, action:{ payload: Song }) => {
      state.songs = [...state.songs, action.payload];
      state.isLoading = false;
      state.error = "";
    },
    addSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },

    deleteSong: (state, action: { payload: string }) => {
      console.log(action.payload);
      state.isLoading = true;
      state.error = "";
    },
    deleteSongSuccess: (state, action: { payload: Song }) => {
      state.songs = [
        ...state.songs.filter((song) => action.payload._id !== song._id),
      ];
      state.isLoading = false;
      state.error = "";
    },
    deleteSongFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  getSongs,
  getSongsSuccess,
  getSongsFailure,
  deleteSong,
  deleteSongSuccess,
  deleteSongFailure,
  addSong,
  addSongSuccess,
  addSongFailure,
} = songSlice.actions;

export default songSlice.reducer;
