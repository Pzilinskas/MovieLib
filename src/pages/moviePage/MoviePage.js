import React, { Component } from 'react';
import './MoviePage.css';

import Toolbar from '../../components/toolbar/Toolbar';
import Footer from '../../components/footer/Footer';

import config from '../../config';
class MoviePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      movie: this.props.match.params.id
    }
  }


  getApi(url) {
    fetch(url).then((res) => res.json()).then((data) => {
      this.setState({movie:data.results })
      console.log(data);
    }).catch((err) => console.log('Movie not found!'))
  }

  getMovie(){
    const  movieId = this.props.match.params.id;  
    let movieUrl = config.baseUrl + 'movie/' + movieId + '?api_key=' + config.key;
    this.getApi(movieUrl);
  }

  componentDidMount(){
    this.getMovie();
    console.log(this.state.movie);
  }
  render() {
    return (
      <div className="MoviePage">
      <div className="container-fluid">
      <Toolbar />
        <div className="row">
       
        </div>
      <Footer />
      </div>
    </div>
    );
  }
}


export default MoviePage;
