import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import 'antd/dist/antd.css';
import { Button } from 'antd';

const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
  };
  return (
    <button type="button" className="btn w-100 btn-primary"  onClick={handleAddToFavorite}
    block>
    
     
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButton;