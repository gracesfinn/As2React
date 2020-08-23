import React from "react";
import ActorHeader from "../components/actorHeader";
import ActorDetails from "../components/actorDetails";
import "./actorPage.css";

const ActorPage = ({ person }) => {
  return (
    <>
      {person ? (
        <>
          <ActorHeader person={person} />
          <div className="row">
            <div className="col-3">
            <img
          className="card-img-tag center "
          alt={person.name}
          src={
            person.profile_path
              ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
            </div>
            <div className="col-9">
              <ActorDetails person={person} />
            </div>
          </div>
        </>
        ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorPage;