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
    <Button
      type="primary"
      onClick={handleAddToFavorite}
    block>
     
      Add to Favorites
    </Button>
  );
};

export default AddToFavoriteButton;