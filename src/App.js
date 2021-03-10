import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeView from './Pages/HomeView';
import MoviesView from './Pages/MovieView/MoviesView';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import ErrorView from './Pages/ErrorView';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/movies/" component={MoviesView} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={ErrorView} />
      </Switch>
    </>
  );
};

export default App;
