import React, { useContext } from "react";
import "./filterControls.css";
import { GenresContext } from '../../contexts/genresContext' 
import 'antd/dist/antd.css';



const FilterControls = props => {
  const context = useContext(GenresContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };


  return (
    <div class="card">
    <div class="card-body">
    <div class="input-group mb-3">
      <div class="input-group-prepend ">
        <span class="input-group-text justify-content-center" id="inputGroup-sizing-default">List Filtering:</span>
          <input
      placeholder="Title Search"
      onChange={handleTextChange}
      style={{ width: 200 }}
    />
          <span class="input-group-text" id="inputGroup-sizing-default">Genres:</span>
    
          <select id="genre" onChange={handleGenreChange}>
            {context.genres.map(genre => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        
      </div>
    </div>
    </div>
  </div>
  );
};

export default FilterControls;