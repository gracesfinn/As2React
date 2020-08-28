import React from "react";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { CalendarTwoTone, StarTwoTone } from '@ant-design/icons';
import "../../globals/fontawesome";

const MovieCard = ({movie, action}) => {
  
  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
    <Link to={`/movies/${movie.id}`}>
      <img
        className="card-img-tag center "
        
        alt={movie.title}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "./film-poster-placeholder.png"
        }
      />
      </Link>
      <div className="card-body">
        <h4 className="card-title ">{movie.title}</h4>
         <p>
            <CalendarTwoTone />
              <span> {movie.release_date}</span>
          </p>
        <p>
            <StarTwoTone />
              <span> {movie.vote_average}</span>
        </p>
      </div>
      <div className="card-footer">  
          {action(movie)} 
      </div>
    </div>
  </div>
    
    );
  };
  
  export default MovieCard;


   