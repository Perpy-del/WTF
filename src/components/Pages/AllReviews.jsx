import ReviewStats from '../ReviewStats';
import ReviewList from '../ReviewList';
import Button from '../layout/Button';
import { IoIosArrowDropleft } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const AllReviews = () => {
  const navigate = useNavigate();
  

  return (
    <div className="container">
      <Button variant="secondary" onClick={() => navigate('/review')}>
        <IoIosArrowDropleft /> Go Back
      </Button>
      <ReviewStats />
      <ReviewList />
    </div>
  );
};

export default AllReviews;
