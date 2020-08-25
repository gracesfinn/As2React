import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import FavoriteMoviesPage from './pages/favoritesMoviesPage';  // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';

import ActorListPage from './pages/actorListPage';
import ActorPage from './pages/actorDetailsPage';
{/*import ActorList from './components/actorList'*/}



const sampleActor = {
  birthday: "1968-03-02",
  known_for_department: "Acting",
  deathday: null,
  id: 8784,
  name: "Daniel Craig",
  also_known_as: [
  "다니엘 크레이그",
  "Деніел Крейг",
  "Дэниел Крэйг",
  "Дэниэл Крэйг",
  "دانيال كريغ",
  "대니얼 크레이그",
  "ダニエル・クレイグ",
  "แดเนียล เคร็ก",
  "丹尼尔·克雷格",
  "Ντάνιελ Κρεγκ"
  ],
  gender: 2,
  biography: "Daniel Wroughton Craig is an English actor, best known for playing British secret agent James Bond since 2006. Craig is an alumnus of the National Youth Theatre and graduated from the Guildhall School of Music and Drama in London and began his career on stage. His early on screen appearances were in the films Elizabeth, The Power of One and A Kid in King Arthur's Court, and on Sharpe's Eagle and Zorro in television. His appearances in the British films Love Is the Devil, The Trench and Some Voices attracted the industry's attention, leading to roles in bigger productions such as Lara Croft: Tomb Raider, Road to Perdition, Layer Cake and Munich.",
  popularity: 8.039,
  place_of_birth: "Chester, Cheshire, England, UK",
  profile_path: "/iFerDZUmC5Fu26i4qI8xnUVEHc7.jpg",
  adult: false,
  imdb_id: "nm0185819",
  homepage: null
}

const actor = [sampleActor, sampleActor, sampleActor];


const App = () => {
  return (
   <BrowserRouter>
      <div className="jumbotron">
      {/*<ActorList /> */}
       {/*<ActorPage person={sampleActor} /> */}
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>    {/* NEW */}
        <Switch>
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} /> 
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/person/:id" component={ActorPage} />
          <Route path="/actors" component={ActorListPage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider>    {/* NEW */}
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));