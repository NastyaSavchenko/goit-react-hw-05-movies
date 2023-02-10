import { ReadMore } from 'components';
import { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import { getReviews } from '../../services/takeApi';
import { ErrorText, RevieWrapp, UserName } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function fetchData() {
      try {
        const response = await getReviews(movieId);
        const reviewsData = response.data.results;
        setReviews(reviewsData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return reviews.length !== 0 ? (
    <ul>
      {reviews.map(revie => {
        return (
          <RevieWrapp key={revie.id}>
            <UserName>
              <FaUserCircle
                style={{
                  fill: '#e50914',
                  marginRight: '5px',
                  width: '20px',
                  height: '20px',
                }}
              />
              {revie.author}
            </UserName>
            <ReadMore>{revie.content}</ReadMore>
          </RevieWrapp>
        );
      })}
    </ul>
  ) : (
    <ErrorText>We don`t have any reviews for this movie</ErrorText>
  );
};

export default Reviews;
