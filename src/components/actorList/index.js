import React from "react";
import ActorCard from "../actorCard/";
import "./actorList.css";

const ActorList = (props) => {
  const actorCards = props.popular.map(popular => (
    <ActorCard key={popular.id} popular={popular} />
  ));
  return <div className="row movies">
      {actorCards}
      </div>;
};

export default ActorList;