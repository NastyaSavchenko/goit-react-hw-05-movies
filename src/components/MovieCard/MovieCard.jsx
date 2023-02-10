import PT from 'prop-types';
import { AiTwotoneLike } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';

import notAvailable from '../../img/notAvailable.png';
import {
  Img,
  InfoWrapp,
  MovieItems,
  RatingWrapp,
  Title,
} from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const location = useLocation();
  const { id, title, vote_average, poster_path, release_date } = movie;
  return (
    <MovieItems key={id}>
      <NavLink
        to={{
          pathname: location.pathname === '/movies' ? `${id}` : `movies/${id}`,
        }}
        state={{ from: location }}
      >
        <RatingWrapp>
          <AiTwotoneLike /> <span> {Math.round(vote_average) * 10}%</span>
        </RatingWrapp>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : notAvailable
          }
          alt={title}
        />
        <InfoWrapp>
          <Title>{title}</Title>
          <p>
            Release date: <span> {release_date}</span>
          </p>
        </InfoWrapp>
      </NavLink>
    </MovieItems>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PT.object.isRequired,
};
