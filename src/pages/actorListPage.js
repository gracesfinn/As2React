import React , {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActorList from "../components/actorList";


const ActorListPage = () => {
    const [popular, setPerson] = useState([])

 useEffect (() => {
     fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`)
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
      
         </>
        ) 
  
}

export default ActorListPage;