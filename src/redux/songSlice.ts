import { createSlice } from "@reduxjs/toolkit";
const initialState: SongState = { songs: [], isLoading: false, error: "" }

export const songSlice = createSlice({
  name: "songs",
  initialState: initialState,
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = false;
      state.error = '';
    },
    getSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    getSongsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const { getSongsFailure, getSongsFetch, getSongsSuccess } =
  songSlice.actions;

export default songSlice.reducer;
