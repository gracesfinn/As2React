import React, {useState, useEffect} from "react";
import ActorHeader from "../components/actorHeader";
import ActorDetails from "../components/actorDetails";
import ActorMovies from "../components/actorMovies";
import "./actorPage.css";
import useActor from "../hooks/useActor";
import useCredits from "../hooks/useCredits";

const ActorPage = props => {
  const { id } = props.match.params;
  const [person] = useActor(id)
  const [credits] = useCredits(id)

  return (
    <> 
    {person ? (
      <>
        <div className="row">
            <div className="col-3">
            <img
              className="card-img-tag center "
              alt={person.name}
              class="img-thumbnail"
              src={
                person.profile_path
                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                 : "./film-poster-placeholder.png"
                  }/>
            </div>
            <div className="col-9">
              <h2>{person.name}</h2>
              <ActorDetails person={person}/>
            </div>
        </div>
    </>
      ): (

        <p>Waiting for Actor's details...</p>

        )}
      {/*{credits ? (
      <ActorMovies credits={credits} />
      ): (
      <p>Waiting for Actor's details...</p>)}   --- Not currently working*/}

    </>
  );
};

export default ActorPage;