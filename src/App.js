import React, { Component } from 'react';

import MainView from './MainView';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MainView />
      </div>
    );
  }
}

export default App;
