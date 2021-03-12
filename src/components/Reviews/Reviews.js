import React, { useState, useEffect } from 'react';
import { openReviewMovie } from '../fetch/fetch';
import style from './Reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    openReviewMovie(id).then(responseReview => setReviews(responseReview.data.results));
  }, []);
  return (
    <>
      <ul className={style.reviewList}>
        {reviews.length ? (
          reviews.map(review => (
            <li key={review.id}>
              <p className={style.author}> Author: {review.author}</p>
              <p className={style.text}>{review.content}</p>
            </li>
          ))
        ) : (
          <h2 className={style.text}>Sorry , no one left a review yet</h2>
        )}
      </ul>
    </>
  );
};

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Reviews;
