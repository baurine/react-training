import React, { Component } from 'react';
import './App.css';
import CounterContainer from './CounterContainer';
import CounterContainer2 from './CounterContainer2';
import Counter4 from './Counter4';
import Counter5 from './Counter5';
import CounterContainer6 from './CounterContainer6';
import Counter7 from './Counter7';
import Counter8 from './Counter8';
import { createStore } from './redux/store';

import cnt from "./redux/reducers/cnt";
import { StoreContext } from './redux/StoreContext';
import Counter9 from './Counter9';
import addReduxThunkMiddleware from './redux/redux-thunk';
import addReduxSagaMiddleware from './redux/redux-saga';

const store = createStore({ cnt: 1000 }, cnt)
addReduxThunkMiddleware(store)

////////////////
// add redux-saga middleware

function delayIncCount(dispatch: any) {
  setTimeout(() => {
    dispatch({type: 'INC_CNT'})
  }, 1000)
}

function saga(action: any, oldDispatch: any) {
  switch(action.type) {
    case 'DELAY_INC_CNT':
      delayIncCount(oldDispatch)
      break
  }
}

addReduxSagaMiddleware(store, saga)

////////////////

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer/>
        <CounterContainer2 initialCnt={8}/>

        <Counter4/>
        <Counter4/>

        <Counter5/>

        <CounterContainer6/>

        <Counter7/>

        <StoreContext.Provider value={store}>
          <Counter8/>
          <Counter8/>
          <Counter9/>
        </StoreContext.Provider>
      </div>
    );
  }
}

export default App;
