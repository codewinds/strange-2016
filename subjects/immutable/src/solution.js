import './util/polyfill'; // first import polyfills
import React from 'react';
import ReactDOM from 'react-dom';

/*
  Example which fetches a list of items from a REST api
  and renders it to the screen. Also logs and renders
  renders the error message if one occurs.
 */


const appContainerDiv = document.querySelector('#appContainer');

function render() {
  ReactDOM.render(<div>Immutable Solution</div>, appContainerDiv);
}

render();
