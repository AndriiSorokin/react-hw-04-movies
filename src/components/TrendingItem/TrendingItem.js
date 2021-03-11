import React from 'react';
import style from './TrendingItem.module.css';
import { useHistory, useLocation } from 'react-router-dom';

const TrendingItem = ({ title, poster_path, id }) => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  const goTo = () => {
    history.push({
      ...location,
      pathname: `movies/${id}`,
      state: {
        from: location,
      },
    });
  };
  return (
    <li className={style.trendigItem} onClick={goTo}>
      <h2 className={style.trendingTitle}>{title}</h2>
      <img
        className={style.trendingImg}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        width="300"
        height="300"
        alt="img"
      />
    </li>
  );
};

export default TrendingItem;
