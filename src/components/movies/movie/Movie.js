import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    let movies = this.props.data;
    console.log(this.movies);
    return (
      <div className="Movie">
      <h5>Works</h5>
        <div key="{movies.id}">
          <h5>{movies.original_title}</h5>
        </div>
      </div>
    );
  }
}

export default Movie;
