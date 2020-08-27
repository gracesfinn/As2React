import React from "react";
import { Link } from "react-router-dom";
import { getActorMovies } from "../../api/tmdb-api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default ({credits}) =>{


return (
    <>
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Title</th>
          <th scope="col">Character</th>
        </tr>
      </thead>
      <tbody>
       
              <tr >
                <td>{credits.release_date}</td>
                <td>{credits.title}</td>
                <td>{credits.character}</td>
              </tr>
              
          )
            
          
      </tbody>
      </table>

      </>

    /*
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/movies/${actorMovies.id}`}>
        <img
          className="card-img-tag center "
          alt={actorMovies.title}
          src={
            actorMovies.poster_path
              ? `https://image.tmdb.org/t/p/w500/${actorMovies.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{actorMovies.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {actorMovies.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {actorMovies.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
        </div>
      </div>
        </div>*/

  )
};



 