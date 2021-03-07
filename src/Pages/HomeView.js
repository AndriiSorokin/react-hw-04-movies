import React, { Component } from 'react';
import { getTrendMovies } from '../components/fetch/fetch';
import TrendingList from '../components/TrendingList/TrendingList';

class HomeView extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    getTrendMovies().then(movie => {
      this.setState({ movies: movie });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1 className="homeTitle">Trending today</h1>
        <TrendingList movies={movies} />
      </div>
    );
  }
}

export default HomeView;
