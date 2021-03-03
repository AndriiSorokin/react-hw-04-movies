import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeView from './Pages/HomeView';
import MoviesView from './Pages/MoviesView';

const App = () => {
  return (
    <>
      <Header />
      <Route exact path="/" component={HomeView} />
      <Route path="/movies" component={MoviesView} />
    </>
  );
};

export default App;
