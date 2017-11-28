import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Toolbar from '../../components/toolbar/Toolbar';
import SearchBar from '../../components/searchBar/SearchBar';
import Footer from '../../components/footer/Footer';

import './SearchResults.css';

import config from '../../config';


class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }
    getApi(url) {
        fetch(url).then((res) => res.json()).then((data) => {
            this.setState({movies:data.results })
            console.log(data);
        }).catch((err) => console.log('Movie not found!'))
    }

    getSearchedMovies(){
        let searchTerm = this.props.match.params.searchTerm;
        let moviesUrl = config.baseUrl + 'search/movie?api_key=' + config.key + '&query=' + searchTerm;
        this.getApi(moviesUrl);
    }

    componentDidMount(){
        this.getSearchedMovies();
    }

    render() {
        return (
            <div className="SearchResults">
                <div className="container-fluid">
                    <Toolbar />
                    <div className="row nav-btn">
                        <div className="col-sm-12">
                            <Link className="btn btn-primary" to="/">Go Back</Link>
                        </div>
                    </div>
                    <div className="Movies row">
                        <div className="col-sm-12">
                            <h2 className="section-title">Searching for {this.props.match.params.searchTerm} </h2>
                        </div>
                        {this.state.movies != 0?
                            this.state.movies.map(movie =>
                            <div className="col-lg-3 col-md-4 col-sm-6" key={movie.id}>
                                <div className="wrapper">
                                    <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path } />
                                    <div className="details">
                                        <h2>{movie.original_title}</h2>
                                        <Link to={'/movie/'+ movie.id}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ): <p>No movies found</p>}
                    </div>
                    <Footer />
                </div>
            </div>

        );
    }
}
export default SearchResults;
