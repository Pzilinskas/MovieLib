import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './Toolbar.css';


class Toolbar extends Component {
  render() {
    return (
      <div className="Toolbar row">
        <div className="col-sm-12 logo">
            <h2><NavLink to="/">MovieLIB</NavLink></h2>
        </div>
      </div>
    );
  }
}

export default Toolbar;
