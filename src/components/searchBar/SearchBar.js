import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event){
        event.preventDefault();
        let searchValue = document.getElementById('searchTerm').value;
        console.log(searchValue);
        this.props.history.push('/search-results/' + searchValue)
    }

  render() {
    return (
      <div className="SearchBar col-sm-8">
        <form onSubmit={this.handleSubmit} className="row">
            <input className="col-sm-10" id="searchTerm" name="searchTerm" type="text" placeholder="Search" />
            <input type="submit" className="col-sm-2" value="Search" />
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
