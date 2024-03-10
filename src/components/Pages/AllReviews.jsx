import { ReviewContext } from "../../ReviewContext";
import { useContext } from "react";
import ReviewStats from '../ReviewStats';
import ReviewList from '../ReviewList';

const AllReviews = () => {
    const {review, setReview} = useContext(ReviewContext);

    const deleteReview = id => {
      if (window.confirm('Are you sure, you want to delete this review?')) {
        setReview(review.filter(item => item.id !== id));
      }
    };
  
    return (
      <div className="container">
        <ReviewStats reviews={review} />
        <ReviewList reviews={review} deleteReview={deleteReview} />
      </div>
    );
};

export default AllReviews;
