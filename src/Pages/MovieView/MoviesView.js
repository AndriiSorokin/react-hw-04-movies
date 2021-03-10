import React, { useState, useEffect } from 'react';
import { useHistory, useParams, NavLink, Switch, Route } from 'react-router-dom';
import { searchMovie } from '../../components/fetch/fetch';
import style from './MoviesView.module.css';
// import MovieDetailsPage from '../components/MovieDetailsPage/MovieDetailsPage';

const MoviesView = () => {
  const [movies, setMovie] = useState([]);
  const [querry, setQuerry] = useState('');
  // const [id, setId] = useState('');
  // const history = useHistory();
  // const params = useParams();

  const handleInput = event => setQuerry(event.target.value);

  // useEffect(() => {
  //   searchMovie(querry).then(movie => setMovie(movie.data.results));
  //   setId(movieId => setId(movieId.id));
  //   setQuerry('');
  // }, []);

  const submitHeandler = e => {
    e.preventDefault();
    searchMovie(querry).then(movie => setMovie(movie.data.results));
    // setId(movieId => setId(movieId.id));
    setQuerry('');
  };
  // const moviesId = () => {
  //   movies.map(movie => setId(movie.id));
  //   console.log(movies);
  // };

  // const goTo = () => {
  //   movies.map(movie => setId(movie.id));
  //   history.push(`/movies/${id}`);
  // };

  return (
    <>
      <form onSubmit={submitHeandler} className={style.searchForm}>
        <input
          className={style.inputForm}
          onChange={handleInput}
          name="search"
          type="text"
          value={querry}
          placeholder="Search film"
        />
        <button className={style.movieBtn} type="submit">
          Search
        </button>
      </form>
      <ul className={style.trendingList}>
        {movies.map(movie => (
          <li className={style.trendigItem} key={movie.id}>
            <NavLink className={style.optionLink} to={`/movies/${movie.id}`}>
              <h2 className={style.trendingTitle}>{movie.title}</h2>
              <img
                className={style.trendingImg}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                width="300"
                height="300"
                alt="img"
              />
            </NavLink>
            <Switch>
              <Route path="/movies/:id" />
            </Switch>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesView;
