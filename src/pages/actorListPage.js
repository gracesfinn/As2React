import React from "react";
import Header from "../components/headerMovieList";
import ActorList from "../components/actorList";
import FilterControls from "../components/filterControls";

const ActorListPage = ({actors}) => {
  return (
    <>
      <Header numActors={actors.length} />
      <FilterControls />
      <ActorList person={actors} />
    </>
  );
};

export default ActorListPage;