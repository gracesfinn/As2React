import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import ActorList from "../actorList";

const ActorListPageTemplate = ({actors}) => {
    let displayedActors = ActorList

return (
    <>
      < ActorList
        actors={displayedActors}
      ></ActorList>
    </>
  );

};


export default ActorListPageTemplate ;