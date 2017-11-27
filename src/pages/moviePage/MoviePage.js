import React, { Component } from 'react';
import './MoviePage.css';

import Toolbar from '../../components/toolbar/Toolbar';
import Footer from '../../components/footer/Footer';

class MoviePage extends Component {
  render() {
    return (
      <div className="MoviePage">
      <div className="container-fluid">
      <Toolbar />
      
      <Footer />
      </div>
    </div>
    );
  }
}

export default MoviePage;
