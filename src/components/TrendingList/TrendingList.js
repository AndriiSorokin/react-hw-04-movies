import React from 'react';
import TrendingItem from '../TrendingItem/TrendingItem';
import style from './TrendingList.module.css';
import PropTypes from 'prop-types';

const TrendingList = ({ movies }) => {
  return (
    <>
      <div className="container">
        <ul className={style.trendingList}>
          {movies.map(movie => (
            <TrendingItem key={movie.id} {...movie} />
          ))}
        </ul>
      </div>
    </>
  );
};

TrendingList.propTypes = {
  movies: PropTypes.array,
};
export default TrendingList;
