import React, { Component } from 'react';
import './Toolbar.css';


class Toolbar extends Component {
  render() {
    return (
      <div className="Toolbar row">
        <div className="col-sm-12 logo">
          <h2>MovieLIB</h2>
        </div>
      </div>
    );
  }
}

export default Toolbar;
