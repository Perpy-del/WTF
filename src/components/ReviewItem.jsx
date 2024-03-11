/* eslint-disable react/prop-types */
import { ReviewContext } from '../ReviewContext';
import { useContext } from 'react';
import { FaTimes } from "react-icons/fa"

function ReviewItem({review}) {
  const {deleteReview} = useContext(ReviewContext)


  return (
    <>
      <div className="card review">
        <div className="num-display">{review.rating}</div>
        <div>{review.text}</div>
        <button className="close" onClick={()=>deleteReview(review.id)}>
          <FaTimes />
        </button>
      </div>
    </>
  )
}

export default ReviewItem
