import React from "react";
import ActorCard from "../actorCard/";
import "./actorList.css";

const ActorList = (props) => {
  const actorCards = props.person.map(a => (
    <ActorCard key={a.id} person={a} />
  ));
  return <div className="row movies bg-info">
      {actorCards}
      </div>;
};

export default ActorList;