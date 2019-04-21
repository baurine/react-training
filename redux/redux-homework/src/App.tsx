import React, { Component } from 'react';
import './App.css';
import SwPersons from './components/SwPersons';
import SwPersonsFav from './components/SwPersonsFav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SwPersons/>
        <div>-------------------------------</div>
        <SwPersonsFav/>
      </div>
    );
  }
}

export default App;
