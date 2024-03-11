import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/layout/Header';
import Home from './components/Pages/Home';
import Review from './components/Pages/Review';
import About from './components/Pages/About';
import AllReviews from './components/Pages/AllReviews';
import data from './data/reviewData';
import { ReviewContext } from './ReviewContext';
import { v4 as uuid } from 'uuid';

function App() {
  const [reviews, setReviews] = useState(data)

  const AddReview = newReview => {
    newReview.id = uuid();
    setReviews([newReview, ...reviews]);
  };

  const deleteReview = id => {
    if (window.confirm('Are you sure, you want to delete this review?')) {
      setReviews(reviews.filter(item => item.id !== id));
    }
  };

  return (
    <>
      <Header text="Review Application" />
      <Router>
        <ReviewContext.Provider value={{reviews, AddReview, deleteReview}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/review" element={<Review />} />
            <Route path="/all-reviews" element={<AllReviews />} />
          </Routes>
          </ReviewContext.Provider>
      </Router>
    </>
  );
}

export default App;
