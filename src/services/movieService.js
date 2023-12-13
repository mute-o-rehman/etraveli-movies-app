import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const SWAPI_URL = "https://swapi.dev/api/films/?format=json";
const OMDB_API_KEY = "b9a5e69d";
const OMDB_URL = "https://www.omdbapi.com/";

export const getMovies = async () => {
  try {
    const response = await axios.get(SWAPI_URL);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const getMovieDetails = async (movieTitle) => {
  try {
    const response = await fetch(
      `${OMDB_URL}?t=${encodeURIComponent(movieTitle)}&apikey=${OMDB_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movie details: ${response.status}`);
    }

    const data = await response.json();
    return {
      imdbRating: data.imdbRating,
      rottenTomatoesRating: data.Ratings.find(
        (rating) => rating.Source === "Rotten Tomatoes"
      )?.Value,
      metaCriticsRating: data.Metascore,
      poster: data.Poster,
      imdbScore: data.Ratings.find(
        (rating) => rating.Source === "Internet Movie Database"
      )?.Value,
    };
  } catch (error) {
    throw new Error(
      `Failed to get details for ${movieTitle}: ${error.message}`
    );
  }
};

const movieServiceSlice = createSlice({
  name: "movieService",
  initialState: { selectedMovie: {} },
  reducers: {
    setMovieDetails: (state, action) => {
      return {
        ...state,
        selectedMovie: { ...state.selectedMovie, ...action.payload },
      };
    },
  },
});

export const setMovieDetails = (state, action) => {
  return {
    ...state,
    selectedMovie: { ...state.selectedMovie, ...action.payload },
  };
};
export const movieServiceReducer = movieServiceSlice.reducer;
