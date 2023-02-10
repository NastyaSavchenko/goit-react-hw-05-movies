import { MovieCard } from 'components';
import PT from 'prop-types';

import { MoviesListStales } from './MoviesList.styled';

const MoviesList = ({ moviesData }) => {
  return (
    <MoviesListStales>
      {moviesData.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MoviesListStales>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  moviesData: PT.array.isRequired,
};
