import React, { useState, useEffect } from 'react';
import { Switch, useParams, NavLink, Route } from 'react-router-dom';
import { openSingleMovie } from '../fetch/fetch';
import Actors from '../Actors/Actors';
import Reviews from '../Reviews/Reviews';
import style from './MovieDetails.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const params = useParams();

  useEffect(() => {
    openSingleMovie(params.movieId)
      .then(responseMovie => setMovie(responseMovie.data))
      .catch(error => console.log(error));
  }, []);

  console.log(movie);
  const movieId = params.movieId;
  const { original_title, poster_path, release_date, overview, vote_average } = movie;
  const genres = movie.genres;
  console.log(genres);

  return (
    <div className={style.detailsWrapper}>
      <ul className={style.detailsList}>
        <li>
          <h2 className={style.title}>{original_title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            width="400"
            height="500"
            alt="img"
          />
        </li>
      </ul>
      <ul className={style.detailsDescription}>
        <li>
          <h3>
            {original_title} <br></br> release: ({release_date})
          </h3>
          <p className={style.desc}>
            Overview :<br></br>
            {overview}
          </p>
          <p> Vote average:{vote_average}</p>
        </li>
        {genres?.map(genre => (
          <li key={genre.id}>
            <p>{genre.name}</p>
          </li>
        ))}
        <nav className={style.detailNav}>
          <NavLink className={style.optionLink} to={`/movies/${movieId}/actors`}>
            Actors
          </NavLink>
          <NavLink className={style.optionLink} to={`/movies/${movieId}/reviews`}>
            Reviews
          </NavLink>
        </nav>
        <Switch>
          {/* <Route path="/movies/actors" component={Actors} /> */}
          <Route path="/movies/:id/actors" render={props => <Actors {...props} id={movieId} />} />
          <Route path="/movies/reviews" component={Reviews} />
        </Switch>
      </ul>
    </div>
  );
};

export default MovieDetailsPage;

// adult: false
// backdrop_path: "/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg"
// belongs_to_collection: null
// budget: 0
// genres: (4) [{…}, {…}, {…}, {…}]
// homepage: "https://movies.disney.com/raya-and-the-last-dragon"
// id: 527774
// imdb_id: "tt5109280"
// original_language: "en"
// original_title: "Raya and the Last Dragon"
// overview: "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people."
// popularity: 889.424
// poster_path: "/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg"
// production_companies: (2) [{…}, {…}]
// production_countries: [{…}]
// release_date: "2021-03-03"
// revenue: 0
// runtime: 107
// spoken_languages: [{…}]
// status: "Released"
// tagline: "A quest to save her world."
// title: "Raya and the Last Dragon"
// video: false
// vote_average: 8.7
// vote_count: 228
