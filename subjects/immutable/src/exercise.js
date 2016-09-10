import './util/polyfill'; // first import polyfills
import React from 'react';
import ReactDOM from 'react-dom';

/*
   Immutable Exercise

   1.
 */

const appContainerDiv = document.querySelector('#appContainer');

const struct = {
  profile: {
    firstName: 'Jordan',
    lastName: 'Bell',
    emails: [
      'jordan@bell.com',
      'jbell@gmail.com'
    ]
  },
  favorites: [
    'http://news.com/item/foo',
    'http://codewinds.com/'
  ]
};









function render() {
  ReactDOM.render(<div>Immutable Exercise</div>, appContainerDiv);
}

render();
