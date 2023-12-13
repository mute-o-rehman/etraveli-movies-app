import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedMovie } from "../redux/moviesSlice";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const MovieDetail = () => {
  const selectedMovie = useSelector(selectSelectedMovie);
  const arabicToRoman = (num) => {
    const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

    return romanNumerals[num - 1] || num.toString();
  };
  return (
    <div>
      {selectedMovie ? (
        <div>
          <h4 className="mb-3">
            Episode {arabicToRoman(selectedMovie.episode_id)} -{" "}
            {selectedMovie.title}
          </h4>
          <div className="row mb-3">
            <div className="col-md-3 xs-mb-4">
              <img
                className="movie-poster w-100"
                style={{ height: "200px" }}
                src={selectedMovie.poster}
                alt={`${selectedMovie.title} Poster`}
              />
            </div>
            <div className="col-md-9">
              <p>{selectedMovie.opening_crawl}</p>
            </div>
          </div>
          <p>Directed by: {selectedMovie.director}</p>
          <div className="d-flex align-items-center mb-3">
            <p className="mb-0" style={{ marginRight: "15px" }}>
              Average Rating:
            </p>
            <StarRating rating={selectedMovie.imdbRating} />
          </div>
          <div className="rating-pills-wrapper">
            <span className="badge rounded-pill bg-primary xs-mb-3">
              Internet Movie Database: {selectedMovie.imdbScore}
            </span>
            <span className="badge rounded-pill bg-primary xs-mb-3">
              Rotten Tomatoes: {selectedMovie.rottenTomatoesRating}
            </span>
            <span className="badge rounded-pill bg-primary xs-mb-3">
              MetaCritics: {selectedMovie.metaCriticsRating}
            </span>
          </div>
        </div>
      ) : (
        <div className="alert alert-primary d-flex align-items-center">
          <FontAwesomeIcon icon={faCircleInfo} />
          <div style={{ marginLeft: "6px" }}>Select a movie to see details</div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
