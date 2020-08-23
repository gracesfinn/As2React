import React from "react";
import "./actorCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const ActorCard = props => {
    return(
        <div className="col-sm-3">
      <div className="card  bg-white">
        <img
          className="card-img-tag center "
          alt={props.person.name}
          src={
            props.person.profile_path
              ? `https://image.tmdb.org/t/p/w500/${props.person.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
    <div className="card-body">
          <h4 className="card-title ">{props.person.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {props.person.birthday}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {props.person.popularity}</span>
          </p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn w-100 btn-primary">
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActorCard ;