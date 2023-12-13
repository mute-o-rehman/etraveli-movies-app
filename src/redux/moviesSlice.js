import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    selectedMovie: null,
  },
  reducers: {
    setMovies: (state, action) => {
      state.list = action.payload;
    },
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    setMovieDetails: (state, action) => {
      state.selectedMovie = { ...state.selectedMovie, ...action.payload };
    },
  },
});

export const { setMovies, selectMovie, setMovieDetails } = moviesSlice.actions;

export const selectMovies = (state) => state.movies.list;
export const selectSelectedMovie = (state) => state.movies.selectedMovie;

export default moviesSlice.reducer;
