import './util/polyfill'; // first import polyfills
import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs';

/*

 */


const appContainerDiv = document.querySelector('#appContainer');

function render() {
  ReactDOM.render(<div>Exercises here</div>, appContainerDiv);
}

render();
