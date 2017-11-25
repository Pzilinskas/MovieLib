import React, { Component } from 'react';
import './Movies.css';

import Movie from './movie/Movie';

class Movies extends Component {
  render() {
    return (
      <div className="Movies row">
        <div className="col-sm-3">
            <Movie />
        </div>
      </div>
    );
  }
}

export default Movies;
