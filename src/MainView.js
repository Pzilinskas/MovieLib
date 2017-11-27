import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './pages/homePage/HomePage';
import MoviePage from './pages/moviePage/MoviePage';

class MainView extends Component {
  render() {
    return (
       <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="movie/*" component={MoviePage} />
        </Switch>
      </Router>
    );
  }
}

export default MainView;
