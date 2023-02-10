import { Loader, MoviesList, SearchMovies } from 'components';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getMoviesByName } from '../../services/takeApi';
import { MainSlyels } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesData, setmoviesData] = useState([]);
  const location = useLocation();
  const fromQueryString = location.search.replace(/\?query=/, '');

  const getQuery = searchName =>
    searchName === ''
      ? toast.error('Enter the name of the movie')
      : setQuery(searchName);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchData() {
      try {
        const response = await getMoviesByName(query);
        const data = response.data.results;

        data.length === 0
          ? toast.error(`Sorry, we can't find any ${query}`)
          : setmoviesData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [query]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMoviesByName(fromQueryString);
        const data = response.data.results;
        setmoviesData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <MainSlyels>
        <SearchMovies onSubmit={getQuery} />
        {moviesData && <MoviesList moviesData={moviesData} />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainSlyels>
    </>
  );
};

export default Movies;
