import './util/polyfill'; // first import polyfills
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// locate a div in our html where we want to render
const appContainerDiv = document.querySelector('#appContainer');

/* array reduce */

// const arr = ['a', 'b', 'c'];
// const obj = arr.reduce((acc, x) => {
//   acc[x] = true;
//   return acc;
// }, {});

// console.log('obj', obj);

/* redux store */

const store = createStore(reducer);

const initialState = {
  audit: []
};

function reducer(state=initialState, action) {
  switch (action.type) {
  case 'FOO':
    return {
        ...state,
      audit: state.audit.concat(action)
    };
  default:
    return state;
  }
}

store.subscribe(() => {
  console.log('state', store.getState());
});

store.dispatch({ type: 'FOO' });
store.dispatch({ type: 'BAR' });


/* stateless function component */
// function App({ prefix }) {
//   return (
//       <div>
//         <h1>{ prefix } Strange Loop!!!</h1>
//         <div>using stateless function component</div>
//       </div>
//   );
// }
