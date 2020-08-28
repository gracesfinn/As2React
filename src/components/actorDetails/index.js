import React from "react";
import "./actorDetails.css";


export default ({person}) => {

    return (
        <>
          <h4>Biography</h4>
         
          <ul className="list-group list-group-flush">
          <li key="ruh" className="list-group-item  ">
          {person.biography}
          </li>
            <b><li key="ruh" className="list-group-item list-group-item-info ">
              Birthday
            </li></b>
            <li key="rut" className="list-group-item ">
              {person.birthday}
            </li>
            <b><li key="rdh" className="list-group-item list-group-item-info ">
              Place of Birth
            </li></b>
            <li key="rdv" className="list-group-item ">
              {person.place_of_birth}
            </li></ul>
        </>
    )
};