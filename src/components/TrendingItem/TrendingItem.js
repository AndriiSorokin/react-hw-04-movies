import React from 'react';
import style from './TrendingItem.module.css';

const TrendingItem = ({ title, poster_path }) => {
  return (
    <li className={style.trendigItem}>
      <h2 className={style.trendingTitle}>{title}</h2>
      <img className={style.trendingImg} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} width="300" height="300" />
    </li>
  );
};

export default TrendingItem;
