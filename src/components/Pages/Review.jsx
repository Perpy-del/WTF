import { Link, useNavigate } from 'react-router-dom';
import ReviewForm from '../ReviewForm';
import { FaHouseDamage } from 'react-icons/fa';
import Button from '../layout/Button';

function Review() {
  const navigate = useNavigate();

  return (
    <>
      <ReviewForm />
      <div className="house-link">
        <Link to="/">
          <FaHouseDamage size={40} />
        </Link>
      </div>
      <div className="container">
        <Button
          type="button"
          variant="secondary"
          onClick={() => navigate('/all-reviews')}
        >
          See All Reviews
        </Button>
      </div>
      </>
  );
}

export default Review;
