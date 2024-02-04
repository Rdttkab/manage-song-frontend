import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "songs",
  initialState: { songs: [], isLoading: false, error: "" },
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = false;
    },
    getSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
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
