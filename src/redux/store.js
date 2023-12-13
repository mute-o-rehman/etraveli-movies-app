import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import { movieServiceReducer } from "../services/movieService";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieService: movieServiceReducer,
  },
});
