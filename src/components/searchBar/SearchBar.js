import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar col-sm-6">
        <form>
            <input type="text" placeholder="Search" />
            <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
