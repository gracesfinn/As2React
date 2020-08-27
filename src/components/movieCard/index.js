import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import 'antd/dist/antd.css';
import { CalendarTwoTone, StarTwoTone } from '@ant-design/icons';
import "../../globals/fontawesome";
import { Card,  Col, Row, Space} from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieCard = ({movie, action}) => {
  const { Meta } = Card;
  return (
    <Space direction="vertical">
    <div className="site-card-wrapper">
      <Row gutter={16}>
      <Col span={6}>
      
    <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <Link to={`/movies/${movie.id}`}>
    <img alt={movie.title} style={{ width: 250 }} src={
      movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : "./film-poster-placeholder.png"
    } /> </Link>
  }
  style={{ width: 300 }}
  size="small"
  > 
  
    <Meta title={movie.title} description={<CalendarTwoTone /> , movie.release_date}
             />
  </Card>
  
  </Col>
  </Row>
  </div>
  </Space>
    );
  };
  
  export default MovieCard;


    {/*
    <div className="col-sm-3">
      
      <Link to={`/movies/${movie.id}`}>
        <img
          className="card-img-tag center "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{movie.title}</h4>
          <p>
          <CalendarTwoTone />
            <span> {movie.release_date}</span>
          </p>
          <p>
          <StarTwoTone />
            <span> {movie.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
           {action(movie)}
        </div>
      </div>
      
    </div>
        */}
