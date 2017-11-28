import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Movies.css';

import config from '../../config';


class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movieCount: 0,
      movies: []
    }
  }
  getApi(url) {
    fetch(url).then((res) => res.json()).then((data) => {
      this.setState({movies:data.results })
      this.setState({movieCount: data.total_results})
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
          <div className="col-sm-12">
              <p><strong>Number of movies in database:</strong>{this.state.movieCount}</p>
          </div>
          <div className="col-sm-12">
              <h2 className="section-title">Popular Movies</h2>
          </div>
       {this.state.movies.map(movie => 
        <div className="col-lg-3 col-md-4 col-sm-6" key={movie.id}>
          <div className="wrapper">
          <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path } />
            <div className="details">
              <h2>{movie.original_title}</h2>
              <Link to={'movie/'+ movie.id}>Read More</Link>
            </div>
          </div>
        </div>
      )}
      </div>
    );
  }
}
export default Movies;
