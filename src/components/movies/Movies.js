import React, { Component } from 'react';

import './Movies.css';

import config from '../../config';

import Movie from './movie/Movie';

class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }
  getApi(url) {
    fetch(url).then((res) => res.json()).then((data) => {
      // update state with API data
      this.setState({movies:data })
    }).catch((err) => console.log('Movie not found!'))
  }

  getPopularMovies(){
    let moviesUrl = config.baseUrl + 'movie/popular?api_key=' + config.key;
    this.getApi(moviesUrl);
  }

  componentDidMount(){
    this.getPopularMovies();
  }

  render() {
    return (
      <div className="Movies row">
        <div className="col-sm-3">
            <Movie data="{this.state}" />
        </div>
      </div>
    );
  }
}
export default Movies;
