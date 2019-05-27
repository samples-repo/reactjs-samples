import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { createStore, combineReducers } from 'redux';

// action creator
const addItem = item => {
  return {
    type: "ADD_ITEM",
    item: item
  };
};

// reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    default:
      return state;
  }
};

var store = createStore(reducer);

console.log(store.dispatch(addItem("a")));
console.log(store.getState());
console.log(store.dispatch(addItem("b")));
console.log(store.getState());
console.log(store.dispatch(addItem("c")));
console.log(store.getState());

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
