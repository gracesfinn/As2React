import React, {useState, useEffect} from "react";
import ActorHeader from "../components/actorHeader";
import ActorDetails from "../components/actorDetails";
import "./actorPage.css";
import useActor from "../hooks/useActor";

const ActorPage = props => {
  const { id } = props.match.params;
  const [person] = useActor(id)
 
 
  
  return (
    <> 
    {person ? (
      <>
         
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
            <h4>{person.name}</h4>
            <ActorDetails person={person}/>
            
            
            </div>
          </div>
    </>
      ): (
        <p>Waiting for Actor's details...</p>
      )}


    </>
  );
};

export default ActorPage;