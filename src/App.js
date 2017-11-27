import React, { Component } from 'react';

import Toolbar from './components/toolbar/Toolbar';
import SearchBar from './components/searchBar/SearchBar';
import Movies from './components/movies/Movies';
import Footer from './components/footer/Footer';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
        <Toolbar />
        <div className="row">
          <SearchBar />
        </div>
        <Movies />
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
