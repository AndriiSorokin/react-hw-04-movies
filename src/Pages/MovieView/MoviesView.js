import React, { useState, useEffect } from 'react';
import { useHistory, NavLink, Switch, Route, withRouter, useLocation } from 'react-router-dom';
import { searchMovie } from '../../components/fetch/fetch';
import style from './MoviesView.module.css';

const MoviesView = () => {
  const [movies, setMovie] = useState([]);
  const [querry, setQuerry] = useState('');
  const history = useHistory();
  const location = useLocation();
  const handleInput = event => setQuerry(event.target.value);

  const submitHeandler = e => {
    e.preventDefault();
    searchMovie(querry).then(movie => setMovie(movie.data.results));
    history.push({
      ...location,
      search: `querry=${querry}`,
    });

    setQuerry('');
  };
  useEffect(() => {
    const url = new URLSearchParams(location.search).get('querry');
    if (!url) {
      return;
    }
    searchMovie(url).then(movie => setMovie(movie.data.results));
  }, []);

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
            <NavLink
              className={style.optionLink}
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from: location,
                },
              }}
            >
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

export default withRouter(MoviesView);
