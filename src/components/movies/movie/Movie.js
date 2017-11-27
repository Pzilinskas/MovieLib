import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    let movies = this.data;
    console.log(movies);
    return (
      <div className="Movie">
      <h5>Works</h5>
        <div key="{movies.id}">
          <h5></h5>
        </div>
      </div>
    );
  }
}

export default Movie;
