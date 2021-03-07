import React from 'react';
import TrendingItem from '../TrendingItem/TrendingItem';
import style from './TrendingList.module.css';

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

export default TrendingList;
