import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer row">
          <div className="col-sm-12">
        <p className="App-intro">
          MovieLib - API provided by <a href="https://www.themoviedb.org/" target="_top">The Movie DB</a>
        </p>
          </div>
      </div>
    );
  }
}

export default Footer;
