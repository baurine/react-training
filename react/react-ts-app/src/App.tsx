import React, { Component } from 'react';
import './App.css';
import HelloMessage1 from './HelloMessage1';
import HelloMessage2 from './HelloMessage2';
import HelloMessage3 from './HelloMessage3';
import HelloMessage4 from './HelloMessage4';
import Counter from './Counter';
import WindowWidthViewer from './WindowWidthViewer';
import CuteCat from './CuteCat';
import StyleExample from './StyleExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloMessage1 name='javascritp'/>
        <HelloMessage2 name='react'/>
        <HelloMessage3 name='typescript'/>
        {/* <button onClick={(event) => alert('click')}> click </button> */}
        <HelloMessage4 name='world' onClickBtn={(str) => alert(str)}/>

        <Counter initialCnt={6}/>

        <WindowWidthViewer/>

        <CuteCat/>

        <StyleExample/>
      </div>
    );
  }
}

export default App;
