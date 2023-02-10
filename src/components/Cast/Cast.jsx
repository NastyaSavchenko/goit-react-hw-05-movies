import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import imageNotFound from '../../img/imageNotFound.jpg';
import { getCasts } from '../../services/takeApi';
import {
  CastBox,
  CastsWrapp,
  Character,
  ErrorText,
  Name,
  Photo,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchData() {
      try {
        const response = await getCasts(movieId);
        const castsData = response.data.cast;
        setCasts(castsData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return casts.length === 0 ? (
    <ErrorText>
      We don`t have any information about casts for this movie
    </ErrorText>
  ) : (
    <CastsWrapp>
      {casts.map(cast => {
        return (
          <CastBox key={cast.credit_id}>
            <Photo
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                  : imageNotFound
              }
              alt={cast.name}
            />
            <Name>{cast.name}</Name>
            <Character>Character: {cast.character}</Character>
          </CastBox>
        );
      })}
    </CastsWrapp>
  );
};

export default Cast;
