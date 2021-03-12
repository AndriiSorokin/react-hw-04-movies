import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import ErrorView from './Pages/ErrorView';

const HomeView = lazy(() => import('./Pages/HomeView/HomeView'));
const MoviesView = lazy(() => import('./Pages/MovieView/MoviesView'));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage.js'));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/movies/" component={MoviesView} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route component={ErrorView} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
