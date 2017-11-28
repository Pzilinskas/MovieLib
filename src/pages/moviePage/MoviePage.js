import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MoviePage.css';

import Toolbar from '../../components/toolbar/Toolbar';
import Footer from '../../components/footer/Footer';

import config from '../../config';
class MoviePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: [],
      genres: [],
      cast: [],
    }
  }


  getApi(url) {
    fetch(url).then((res) => res.json()).then((data) => {
      this.setState({movie:data })
      this.setState({genres:data.genres})
    }).catch((err) => console.log('Movie not found!'))
  }

  getMovie(){
      let  movieId = this.props.match.params.id;
      let movieUrl = config.baseUrl + 'movie/' + movieId + '?api_key=' + config.key;
    this.getApi(movieUrl);
  }
  getMovieCast(){
      let  movieId = this.props.match.params.id;
      let castUrl = config.baseUrl + 'movie/' + movieId + '/credits?api_key=' + config.key;
      fetch(castUrl).then((res) => res.json()).then((data) => {
          this.setState({cast:data.cast })
          console.log(data);
      }).catch((err) => console.log('Movie not found!'))
  }
  componentDidMount(){
    this.getMovie();
    this.getMovieCast();
  }
  render() {

      var numberOfCastToShow = 12;
      var castMembers = this.state.cast.slice(0, numberOfCastToShow).map(castMember => {
          return  <div className="col-sm-2" key={castMember.id}>
              <img src={'https://image.tmdb.org/t/p/w500/' + castMember.profile_path} alt=""/>
              <h6><strong>Name:</strong> {castMember.name}</h6>
              <h6><strong>Character</strong>: {castMember.character}</h6>
          </div>
      })

    return (
      <div className="MoviePage">
      <div className="container-fluid">
      <Toolbar />
    <div className="row nav-btn">
        <div className="col-sm-12">
            <Link className="btn btn-primary" to="/">Go Back</Link>
        </div>
    </div>
        <div className="row movie-details">
          <div className="col-sm-4">
          <img src={'https://image.tmdb.org/t/p/w500/' + this.state.movie.poster_path } alt="{this.state.movie.original_title}"/>
          </div>
          <div className="col-sm-8">
            <h2 className="title">{this.state.movie.original_title}</h2>
            <div className="movie-info row">
                <div className="col-sm-12">
                    <h3>Information:</h3>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                    <div className="col-sm-12">
                        <p><strong>Runtime: </strong>{this.state.movie.runtime}mins</p>
                        <p><strong>Budget: </strong>${this.state.movie.budget}</p>
                        <p><strong>Revenue: </strong>${this.state.movie.revenue}</p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <p className="col-sm-12"><strong>Release date: </strong>{this.state.movie.release_date}</p>
                        <p className="col-sm-12"><strong>Rating: </strong>{this.state.movie.vote_average}</p>
                    </div>
                </div>

            </div>
              <div className="row">
                  <div className="col-sm-12">
                      <h3>Overview:</h3>
                      <p>{this.state.movie.overview}</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-sm-12">
                      <h3>Genres:</h3>
                      <ul className="genres-list">
                          {this.state.genres.map(genre =>
                            <li key={genre.id}>{genre.name}</li>
                          )}
                      </ul>
                  </div>
              </div>
          </div>
        </div>
          <div className="row cast-section">
              <div className="col-sm-12">
                  <h2 className="section-title">Cast</h2>
              </div>
              {castMembers}
          </div>
          <Footer />
      </div>
    </div>
    );
  }
}


export default MoviePage;
