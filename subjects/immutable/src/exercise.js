import './util/polyfill'; // first import polyfills
import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import deepFreeze from 'deep-freeze';
import Imm from 'immutable';
import { merge, mergeIn, set, setIn, update, updateIn } from 'timm';
import Up from 'updeep';

/*
   Immutable Exercise

   Immutability w/o ImmutableJS nor using any immutable helper libs

   1a. In an immutable fashion create a new struct `struct1` which updates
   the firstName of struct to 'Jessica' without using ImmutableJS or
   any helper libs. Hint: you might use Object spread or Object.assign

   1b. In an immutable fashion create a new struct `struct2` based on
   struct1 which appends a new email `jb@foo.com` w/o ImmutableJS or
   any helper libs.

   1c. Console.log the value of firstName

   1d. Iterate on the emails and console.log each with `.forEach`

   1e. Create an array of states called `history` which contains each
   of the previous states. Console.log the state just prior to the
   current from your history array.

   ImmutableJS

   Repeating steps but now using ImmutableJS Maps and Lists

   2a. Create immutablejs structure and update firstName

   2b. Append new email

   2c. Console.log the value of firstName

   2d. Iterate on the emails and console.log with `.forEach`

   2e. Create an array of states called `history` which contains each
   of the previous states. Console.log the state just prior to the
   current from your history array.


   ImmutableJS Records and Lists

   3a. Create immutablejs structure using Records and Lists and update firstName. Hint: it's not worth it to try to convert struct, just create from scratch using Immutable Records and Lists.

   3b. Append new email

   3c. Console.log the value of firstName

   3d. Iterate on the emails and console.log with `.forEach`

   3e. Create an array of states called `history` which contains each
   of the previous states. Console.log the state just prior to the
   current from your history array.


   Using Timm immutable helper lib

   4a. Using the original `struct`. Create an updated state using the Timm helper lib by updating the firstName.

   4b. Append new email using the Timm helper lib

   4c. Console.log the value of firstName

   4d. Iterate on the emails and console.log with `.forEach`

   4e. Create an array of states called `history` which contains each
   of the previous states. Console.log the state just prior to the
   current from your history array.

   Using Updeep immutble helper lib

   5a. Using the original `struct`. Create an updated state using the Updeep helper lib by updating the firstName.

   5b. Append new email using the Updeep helper lib

   5c. Console.log the value of firstName

   5d. Iterate on the emails and console.log with `.forEach`

   5e. Create an array of states called `history` which contains each
   of the previous states. Console.log the state just prior to the
   current from your history array.


   Convert a reducer in React/Redux app to using ImmutableJS Record/List

   6. Convert profileReducer (and profileInitialState) to use ImmutableJS using Records and Lists.

   You should see the proper results of the dispatch updates at the
   bottom of this file resulting in name: Jorden Baz and a total of three
   emails with the last being jb@baz.com

   Note: we can safely update individual reducers to use ImmutableJS and
   we can even mix using any immutable helpers for other reducers.
   If using Immutable.js with Records rather than Maps then we don't
   need to change how we access the data in React since .foo will still
   work.

 */

const appContainerDiv = document.querySelector('#appContainer');

const struct = {
  profile: {
    firstName: 'Jordan',
    lastName: 'Bell',
    emails: [
      'jordan@foo.com',
      'jbellfoo@gmail.com'
    ]
  },
  favorites: [
    'http://news.com/item/foo',
    'http://codewinds.com/'
  ]
};

// performing deep-freeze to help ensure you are not mutating struct
// For performance you would not likely do this in production mode
deepFreeze(struct);

// You can uncomment these to see that mutations will not be allowed
// struct.favorites.push('this should not work if frozen');
// struct.profile.firstName = 'neither will this';

/* Immutability without ImmutableJS nor using immutable helper libs */

// TODO 1a - create struct1 from updating firstName in struct
// const struct1 = ?;

// TODO 1b - create struct2 from appending to emails in struct1
// const struct2 = ?;

// TODO 1c - console.log value of firstName
// console.log('struct2 firstName', ?);

// TODO 1d - iterate on the emails and console.log each with `.forEach`


// TODO 1e - create history array of previous states, log prior state from it
// const history1 = [?];
// console.log('prev state history1', ?); // log prior state


/* Using ImmutableJS Maps and Lists for the same steps */

// TODO 2a - create immutablejs istruct, update firstName result istruct1
// const istruct = ?; // create immutablejs version of struct
// const istruct1 = ?; // update istruct1 firstName into istruct1

// TODO 2b - create istruct2 from appending to emails in istruct1
// const istruct2 = ?;  // append email to istruct1

// TODO 2c - console.log value of firstName
// console.log('istruct2 firstName', ?);

// TODO 2d - iterate on the emails and console.log each with `.forEach`
// iterate over istruct2 emails and console.log each

// TODO 2e - create history array of previous states, log prior state from it
// const history2 = [?];
// console.log('prev state history2', ?); // log prior state


/* Using ImmutableJS Records and Lists */

// TODO 3a - create immutablejs irstruct, update firstName result irstruct1
// const irstruct = ?; // create immutablejs Record/List of struct
// const irstruct1 = ?; // update irstruct1 firstName into irstruct1

// TODO 3b - create irstruct2 from appending to emails in irstruct1
// const irstruct2 = ?;  // append email to istruct1

// TODO 3c - console.log value of firstName
// console.log('irstruct2 firstName', ?);

// TODO 3d - iterate on the emails and console.log each with `.forEach`
// iterate over irstruct2 emails and console.log each

// TODO 3e - create history array of previous states, log prior state from it
// const history3 = [?];
// console.log('prev state history3', ?); // log prior state


/* Using Timm immutable helper lib */

// TODO 4a - update firstName from struct into tstruct1 with Timm
// const tstruct1 = ?; // update struct firstName into tstruct2

// TODO 4b - create tstruct2 from appending to emails in tstruct1
// const tstruct2 = ?;  // append email to tstruct1 with Timm

// TODO 4c - console.log value of firstName
// console.log('tstruct2 firstName', ?);

// TODO 4d - iterate on the emails and console.log each with `.forEach`
// iterate over tstruct2 emails and console.log each

// TODO 4e - create history array of previous states, log prior state from it
// const history4 = [?];
// console.log('prev state history4', ?); // log prior state



/* Using Updeep immutble helper lib */

// TODO 5a - update firstName from struct into ustruct1 with Updeep
// const ustruct1 = ?; // update struct firstName into ustruct2

// TODO 5b - create ustruct2 from appending to emails in ustruct1
// const ustruct2 = ?;  // append email to ustruct1 with Updeep

// TODO 5c - console.log value of firstName
// console.log('ustruct2 firstName', ?);

// TODO 5d - iterate on the emails and console.log each with `.forEach`
// iterate over ustruct2 emails and console.log each

// TODO 5e - create history array of previous states, log prior state from it
// const history5 = [?];
// console.log('prev state history5', ?); // log prior state



/* Convert profileReducer in React/Redux app to ImmutableJS Record/List */

// TODO 6a - convert profileInialState to use Immutable.js Record/List
const profileInitialState = {
  firstName: 'Jordan',
  lastName: 'Bell',
  emails: [
    'jordan@foo.com',
    'jbellfoo@gmail.com'
  ]
};

// TODO 6b - convert profileReducer to use Immutable.js
function profileReducer(state = profileInitialState, action = {}) {
  switch (action.type) {
    case 'profile/FIELD_UPDATE': // for firstName and lastName updates
      // action.payload = { firstName: 'foo', lastName: 'bar' }
      return {
        ...state,
        ...action.payload
      };
    case 'profile/ADD_EMAIL':
      // action.payload = 'newemail@foo.com'
      return {
        ...state,
        emails: state.emails.concat(action.payload)
      };
    default:
      return state;
  }
}

const favoriteInitialState = [
  'http://news.com/item/foo',
  'http://codewinds.com/'
];

function favoriteReducer(state = favoriteInitialState, action = {}) {
  // imagine some handlers here
  return state;
}

const rootReducer = combineReducers({
  profile: profileReducer,
  favorites: favoriteReducer
});

const store = createStore(rootReducer);

function Profile({ firstName, lastName, emails }) {
  return (
    <div>
      <h2>Profile</h2>
      <div>Name: { firstName } { lastName }</div>
      <ul>
        { emails.map(email => (
          <li key={email}>{email}</li> )) }
      </ul>
    </div>
  );
}

const CProfile = connect(
  state => ({
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    emails: state.profile.emails
  })
)(Profile);

function Favorites({ list }) {
  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        { list.map(fav => (
          <li key={fav}><a href={ fav }>{ fav }</a></li> )) }
      </ul>
    </div>
  );
}

const CFavorites = connect(
  state => ({
    list: state.favorites
  })
)(Favorites);

function App() {
  return (
    <div>
      <h1>Immutable Exercise</h1>
      <CProfile />
      <CFavorites />
    </div>
  );
}

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    appContainerDiv
  );
}

render();

store.dispatch({
  type: 'profile/FIELD_UPDATE',
  payload: {
    firstName: 'Jorden',
    lastName: 'Baz'
  }
});

store.dispatch({
  type: 'profile/ADD_EMAIL',
  payload: 'jb@baz.com'
});
