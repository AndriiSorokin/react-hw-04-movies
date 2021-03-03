import React, { Component } from 'react';
import { getTrendMovies } from '../components/fetch/fetch';

class HomeView extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    getTrendMovies().then(movie => {
      this.setState({ movies: movie });
      console.log(this.state.movies);
    });
  }

  render() {
    return <div></div>;
  }
}

export default HomeView;
