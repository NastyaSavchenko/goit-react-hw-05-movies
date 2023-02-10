import { TrendMoviesList } from 'components';

import { MainSlyels } from './Home.styled';

const Home = () => {
  return (
    <MainSlyels>
      <h1>Trending today</h1>
      <TrendMoviesList />
    </MainSlyels>
  );
};

export default Home;
