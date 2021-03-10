import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { searchMovie } from '../../components/fetch/fetch';
import style from './MoviesView.module.css';
// import MovieDetailsPage from '../components/MovieDetailsPage/MovieDetailsPage';

const MoviesView = () => {
  const [movies, setMovie] = useState([]);
  const [querry, setQuerry] = useState('');
  const [id, setId] = useState('');
  const history = useHistory();
  console.log(history);

  const handleInput = event => setQuerry(event.target.value);

  const submitHeandler = async e => {
    e.preventDefault();
    searchMovie(querry).then(movie => setMovie(movie.data.results));
    setQuerry('');
  };
  console.log(movies);
  const goTo = () => {
    movies.map(movie => setId(movie.id));
    history.push(`/movies/${id}`);
  };
  return (
    <>
      <form onSubmit={submitHeandler} className="search-form">
        <input onChange={handleInput} name="search" type="text" value={querry} />
        <button type="submit">Search</button>
      </form>
      <ul className={style.trendingList}>
        {movies.map(movie => (
          <li className={style.trendigItem} key={movie.id} onClick={goTo}>
            <h2 className={style.trendingTitle}>
              {movie.title}
              {movie.original_title}
            </h2>
            <img
              className={style.trendingImg}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              width="300"
              height="300"
              alt="img"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesView;
