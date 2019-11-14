import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';

// let store = createStore(reducer)

/* Describes what you wanna do. */
// ACTION
const increment = () => {
  // name: 'INCREMENT' // type is the same as the name
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}


/* Describes how actions transform from initial state to the next state.
  Based on the action - it will modify the store */
// REDUCERS
const counter = (state = 0, action) => {
  /* This is one state for now. The state is counter. */
  switch(action.type){
    case "INCREMENT":
        return state + 1;
    case "DECREMENT":
        return state - 1;
  }
}

/* This is where all the data state will be saved.
  The data will then be accessible to anywhere on the app. */
// STORE
let store = createStore(counter);
// adding into the store

// Display into the console
store.subscribe(() => console.log(store.getState()))

/*
  Execute actions into the reducer.
*/
// DISPATCH
store.dispatch(increment())
store.dispatch(decrement())
// will dispatch depending on what was dispatched

ReactDOM.render(<App />, document.getElementById('root'));
