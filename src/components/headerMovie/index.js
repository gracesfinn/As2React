import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const MovieHeader = ({ movie }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <h2>
          {movie.title}
          
        </h2>
      </div>
    </div>
  );
};

export default MovieHeader;