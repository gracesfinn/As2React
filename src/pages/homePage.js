import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


const MovieListPage = () => {
  const context = useContext(MoviesContext);

  return (
    <>
    <Layout>
      <Sider>Sider</Sider>
     </Layout>

      <Layout>
      <Content>
      <PageTemplate 
        title='All Movies'
        movies={context.movies}
        action={movie => <AddToFavoritesButton movie={movie} /> }
       
      />
       </Content>
      </Layout>
      </>
  );
};

export default MovieListPage;