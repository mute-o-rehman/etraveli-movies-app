import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating, movieTitle }) => {
  const numStars = Math.round(parseFloat(rating) / 2); // Converting IMDb rating to a scale of 5

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < numStars) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} style={{ color: "gold" }} />
        );
      } else if (i - 0.5 < numStars) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalf}
            style={{ color: "gold" }}
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            style={{ color: "lightgray" }}
          />
        );
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
