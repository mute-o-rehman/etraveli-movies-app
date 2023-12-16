import { getMovieDetails, getMovies } from "../services/movieService";
import React, { useEffect, useState } from "react";
import { selectMovie } from "../redux/moviesSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  setMovies,
  selectMovies,
  selectSelectedMovie,
  setMovieDetails,
} from "../redux/moviesSlice";
import StarRating from "./StarRating";
import Loader from "./Loader";
import MovieHeader from "./MovieHeader";
import MovieDetail from "./MovieDetail";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const selectedMovie = useSelector(selectSelectedMovie);

  // Added state for ordering and filtering my list
  const [orderBy, setOrderBy] = useState("episode_id");
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(true);

  const orderedMovies = React.useMemo(
    () =>
      [...movies].sort((a, b) => {
        if (orderBy === "episode_id") {
          return a[orderBy] - b[orderBy];
        } else {
          return a[orderBy].localeCompare(b[orderBy]);
        }
      }),
    [movies, orderBy]
  );

  const filteredMovies = React.useMemo(
    () =>
      orderedMovies.filter((movie) =>
        movie.title.toLowerCase().includes(filterText.toLowerCase())
      ),
    [orderedMovies, filterText]
  );

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const movieList = await getMovies();
        dispatch(setMovies(movieList));
      } catch (error) {
        console.log("Error in fetch movies MovieList component:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [dispatch]);

  const handleSelectMovie = async (movie) => {
    if (
      !selectedMovie ||
      (selectedMovie && selectedMovie.title !== movie.title)
    ) {
      dispatch(selectMovie(movie));

      // Fetching additional details ratings and poster for the selected movie
      try {
        const details = await getMovieDetails(movie.title);
        dispatch(
          setMovieDetails({
            ...movie,
            imdbRating: details.imdbRating,
            rottenTomatoesRating: details.rottenTomatoesRating,
            metaCriticsRating: details.metaCriticsRating,
            poster: details.poster,
            imdbScore: details.imdbScore,
          })
        );
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
  };

  const handleOrderByChange = async (value) => {
    setOrderBy(value);
    if (value === "ratings") {
      try {
        setLoading(true);
        const updatedMovies = await Promise.all(
          movies.map(async (movie) => {
            try {
              const details = await getMovieDetails(movie.title);
              return {
                ...movie,
                averageRating: details.averageRating,
              };
            } catch (error) {
              console.error(
                "Error handle movie order change MovieList:",
                error
              );
              return movie;
            }
          })
        );

        dispatch(setMovies(updatedMovies));
      } catch (error) {
        console.error("If promise fails order change MovieList:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleFilterChange = (value) => {
    setFilterText(value);
  };

  const handleClearFilter = () => {
    setFilterText("");
  };

  const arabicToRoman = (num) => {
    const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

    return romanNumerals[num - 1] || num.toString();
  };

  return (
    <div className="container-fluid">
      <h2 className="text-center mt-3 mb-4">Movies Information Application</h2>
      <div className="row">
        <div className="col-12">
          <MovieHeader
            handleOrderByChange={handleOrderByChange}
            handleFilterChange={handleFilterChange}
            handleClearFilter={handleClearFilter}
            orderBy={orderBy}
            filterText={filterText}
          />
        </div>
        <div className="col-md-6 xs-mb-4">
          {loading ? (
            <Loader />
          ) : (
            <ul className="list-group">
              {filteredMovies.map((movie) => (
                <li
                  className={`list-group-item list-group-item-action ${
                    selectedMovie && selectedMovie.title === movie.title
                      ? "active"
                      : ""
                  }`}
                  key={movie.episode_id}
                  onClick={() => handleSelectMovie(movie)}
                >
                  <div className="row align-items-center">
                    <span className="col-md-2 col-12">
                      EPISODE {movie.episode_id}
                    </span>
                    <span className="col-md-5 col-12">
                      Episode {arabicToRoman(movie.episode_id)} - {movie.title}
                    </span>
                    <div className="col-md-3 col-12">
                      <StarRating rating={movie.imdbRating} />
                    </div>
                    <span className="col-md-2 col-12">
                      {movie.release_date}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {!selectedMovie && <p>Select a movie to see details</p>}
        </div>
        <div className="col-md-6">
          <MovieDetail />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
