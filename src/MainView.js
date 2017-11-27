import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/homePage/HomePage';
import MoviePage from './pages/moviePage/MoviePage';

class MainView extends Component {
  render() {
    return (
       <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/movie/:id" component={MoviePage} />
        </div>
      </Router>
    );
  }
}

export default MainView;
