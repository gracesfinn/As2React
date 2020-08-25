import React, {useState, useEffect} from "react";
import "./actorCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const ActorCard = () => {
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
           
                {
                    popular.map(popular  =>
                        
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
                    
                        
                     
                        )
                }
                </>
        )
};

export default ActorCard ;