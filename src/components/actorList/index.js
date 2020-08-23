import React from "react";
import Actor from "../actorCard/";
import "./actorList.css";

const ActorList = props => {
  const actorCards = props.person.map(a => (
    <Actor key={a.id} person={a} />
  ));
  return <div className="row movies bg-info">{actorCards}</div>;
};

export default ActorList;