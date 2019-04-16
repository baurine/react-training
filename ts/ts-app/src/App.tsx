import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './Article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article title='title' content='content'/>
      </div>
    );
  }
}

export default App;
