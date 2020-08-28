import React from "react";
import "./movieDetails.css";
import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
 
export default ({ movie }) => {
  return (
    
    <>
    <div class="card">
  <div class="card-body">

    <i><h5>{movie.tagline}</h5></i>
  </div>
</div>
    <h4>Overview</h4>
    <p>{movie.overview}</p>
    <Descriptions
        title="Movie Info"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Runtime (min)">{movie.runtime}</Descriptions.Item>
        <Descriptions.Item label="Release Date">{movie.release_date}</Descriptions.Item>
        <Descriptions.Item label="Genres">{movie.genres.map(g => (
          <li key={g.name} className="list-group list-group-flush">
            {g.name}
          </li>
        ))}</Descriptions.Item>
        <Descriptions.Item label="Spoken Languagest">{movie.spoken_languages.map(lang => (
          <li key={lang.name} className="list-group list-group-flush">
            {lang.name}
          </li>
        ))}</Descriptions.Item>
        <Descriptions.Item label="Production Companies"> {movie.production_companies.map(pc => (
          <li key={pc.name} className="list-group list-group-flush">
            {pc.name}
          </li>))}</Descriptions.Item>
        <Descriptions.Item label=" Production Countires">{movie.production_countries.map(pc => (
          <li key={pc.name} className="list-group list-group-flush">
            {pc.name}
          </li>
        ))}</Descriptions.Item>
        
      </Descriptions>
      
      
     
    </>
  );
};