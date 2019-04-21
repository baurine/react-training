import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import dva from 'dva'

import persons from './models/sw-persons'

const app = dva({})
app.model(persons)
app.router(() => <App/>)
app.start('#root')

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

