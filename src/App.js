import React, { Component } from 'react';

import Toolbar from './components/toolbar/Toolbar';
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
        <Movies />
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
