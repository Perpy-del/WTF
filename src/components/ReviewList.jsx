/* eslint-disable react/prop-types */
import ReviewItem from './ReviewItem';
import { ReviewContext } from '../ReviewContext';
import { useContext } from 'react';

function ReviewList() {
  const { reviews } = useContext(ReviewContext);

  if (!reviews || reviews.length === 0) {
    return <p>No review yet!</p>;
  }

  return (
    <>
      <div className='card-container'>
        {reviews.map(item => (
          <div key={item.id}>
            <ReviewItem review={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ReviewList;
