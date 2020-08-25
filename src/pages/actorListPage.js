import React , {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActorList from "../components/actorList";

import axios from 'axios'
import { render } from "react-dom";

{/* import React, {useState, useEffect } from "react";
import Header from "../components/headerMovieList";
import ActorList from "../components/actorList";
import FilterControls from "../components/filterControls";
import PageTemplate from '../components/templateActorListPage'
import { getActors } from "../api/tmdb-api";

{/*const ActorListPage = () => {

    const [actors, setActors] = useState([]);
    useEffect(() => {
        getActors().then(actors => {
          setActors(actors);
        });
      }, []);
  return (
    
      <PageTemplate
      person={actors} 
      />
    
  );
};

export default ActorListPage; */}


const ActorListPage = () => {

    
 const [popular, setPerson] = useState([])

 useEffect (() => {
     fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`)
     .then(res => res.json())
      .then(json => {
        console.log(json)
        return json.results
      })
     .then(popular =>{
         setPerson(popular);
     })
     .catch()
 },[])
    
        return(
            <>
            <h4>Popular Actors</h4>

            <ActorList popular ={popular}/>
                {/*{
                    popular.map(popular  =>
                        <div className="row movies bg-info">
                        <div className="col-sm-3">
                     <div className="card  bg-white" key={popular.id}>
                            <img
                              className="card-img-tag center "
                                 key={popular.id}
                                src={popular.profile_path
                                     ? `https://image.tmdb.org/t/p/w500/${popular.profile_path}`
                                        : "./film-poster-placeholder.png"}></img>
                        
                    <div className="card-body">
                        <h4 className="card-title ">{popular.name}</h4>
                        </div>
                     <div className="card-footer">
                        <button type="button" className="btn w-100 btn-primary">
                            Find Out More
                        </button>
                    </div>
                    </div>
            
                    </div>
                    </div>
                        
                     
                        )
                } */}
                 
            

           {/* <div className="col-sm-3">

           <
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
            
           
            */}
            
           
      
         </>
        ) 
  
}

export default ActorListPage;