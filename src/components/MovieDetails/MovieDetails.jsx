import { Loader } from 'components';
import { Suspense, useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import notAvailable from '../../img/notAvailable.png';
import { getMoviesDetails } from '../../services/takeApi';
import {
  Img,
  InfoLink,
  InfoTitle,
  InfoWrapp,
  LinkStyles,
  MainSlyels,
  MoreInfoList,
  Overview,
  Text,
  Title,
  Wrapp,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setmovieInfo] = useState({});
  const [genres, setGenres] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchData() {
      try {
        const response = await getMoviesDetails(movieId);
        const movieInfo = response.data;
        setmovieInfo(movieInfo);
        setGenres(movieInfo.genres);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const { original_title, release_date, vote_average, overview, poster_path } =
    movieInfo;
  return (
    <>
      <MainSlyels>
        <LinkStyles
          to={{
            pathname: location.state.from.pathname === '/' ? '/' : `/movies`,
          }}
        >
          <BsArrowLeft />
          Go back
        </LinkStyles>
        {movieInfo && (
          <InfoWrapp>
            <Img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : notAvailable
              }
              alt={original_title}
            />
            <Wrapp>
              <Title>
                {original_title}
                <span> ({new Date(release_date).getFullYear()})</span>
              </Title>
              <Text>
                User Score: <span>{Math.round(vote_average) * 10}%</span>
              </Text>
              <InfoTitle>Overview</InfoTitle>
              <Overview>{overview}</Overview>
              {genres.length !== 0 && <InfoTitle>Genres</InfoTitle>}
              {genres.map(genre => {
                return <span key={genre.id}>{genre.name} </span>;
              })}
            </Wrapp>
          </InfoWrapp>
        )}
        <MoreInfoList>
          <li>
            <InfoLink to={'cast'} state={location.state} id={movieId}>
              Cast
            </InfoLink>
          </li>
          <li>
            <InfoLink to={'reviews'} state={location.state}>
              Reviews
            </InfoLink>
          </li>
        </MoreInfoList>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainSlyels>
    </>
  );
};

export default MovieDetails;
