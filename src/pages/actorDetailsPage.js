import React, {useState, useEffect} from "react";
import ActorHeader from "../components/actorHeader";
import ActorDetails from "../components/actorDetails";
import "./actorPage.css";
import useActor from "../hooks/useActor";

const ActorPage = props => {
  const { id } = props.match.params;
  const [person] = useActor(id)
 
 
 {/* const [person, setPerson] = useState(id);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
     .then(res => res.json())
      .then(json => {
        console.log(json)
        return json.results
      })
      .then(person =>{
        setPerson(person);
      });
  }, [id]); */}
  
  return (
    <> 
    {person ? (
      <>
          <h4>{person.name}</h4>
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
            <h4>Biography</h4>
          <p>{person.biography}</p>
          <ul className="list-group list-group-horizontal">
            <li key="ruh" className="list-group-item list-group-item-dark">
              Known For
            </li>
            <li key="rut" className="list-group-item ">
              {person.known_for_department}
            </li>
            <li key="rdh" className="list-group-item list-group-item-dark">
              Place of Birth
            </li>
            <li key="rdv" className="list-group-item ">
              {person.place_of_birth}
            </li></ul>
            <ul className="list-group list-group-horizontal">
          </ul>
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