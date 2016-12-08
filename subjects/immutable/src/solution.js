import './util/polyfill'; // first import polyfills
import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import deepFreeze from 'deep-freeze';
import Imm from 'immutable';
import { merge, mergeIn, set, setIn, update, updateIn } from 'timm';
import Up from 'updeep';
import fp from 'lodash/fp';

/*
   Immutable Solution

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
   of the previous states. Console.log the state just prior to the current

   ImmutableJS

   Repeating steps but now using ImmutableJS Maps and Lists

   2a. Create immutablejs structure and update firstName

   2b. Append new email

   2c. Console.log the value of firstName

   2d. Iterate on the emails and console.log with `.forEach`

   2e. Create an array of states called `history` which contains each
   of the previous states. Console.log the state just prior to the current.


   ImmutableJS Records and Lists

   3a. Create immutablejs structure using Records and Lists and update firstName

   3b. Append new email

   3c. Console.log the value of firstName

   3d. Iterate on the emails and console.log with `.forEach`

   3e. Create an array of states called `history` which contains each
   of the previous states. Console.log the state just prior to the current.


   Using Timm immutable helper lib

   4a. Using the original `struct`. Create an updated state using the Timm helper lib by updating the firstName.

   4b. Append new email using the Timm helper lib

   4c. Console.log the value of firstName

   4d. Iterate on the emails and console.log with `.forEach`

   4e. Create an array of states called `history` which contains each
   of the previous states. Console.log the state just prior to the current.

   Using Updeep immutble helper lib

   5a. Using the original `struct`. Create an updated state using the Updeep helper lib by updating the firstName.

   5b. Append new email using the Updeep helper lib

   5c. Console.log the value of firstName

   5d. Iterate on the emails and console.log with `.forEach`

   5e. Create an array of states called `history` which contains each
   of the previous states. Console.log the state just prior to the current.


   Using lodash-fp

   6a. Using the original `struct`. Create an updated state using lodash-fp by updating the firstName.

   6b. Append new email using lodash-fp

   6c. Console.log the value of firstName

   6d. Iterate on the emails and console.log with `.forEach`

   6e. Create an array of states called `history` which contains each
   of the previous states. Console.log the state just prior to the
   current from your history array.




   Convert a reducer in React/Redux app to using ImmutableJS Record/List

   7. Convert profileReducer (and profileInitialState) to use ImmutableJS using Records and Lists.

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
const struct1 = {
  ...struct,
  profile: {
    ...struct.profile,
    firstName: 'Jessica'
  }
};

// TODO 1b - create struct2 from appending to emails in struct1
const struct2 = {
  ...struct1,
  profile: {
    ...struct1.profile,
    emails: struct.profile.emails.concat('jb@foo.com')
  }
};

// TODO 1c - console.log value of firstName
console.log('struct2 firstName', struct2.profile.firstName);

// TODO 1d - iterate on the emails and console.log each with `.forEach`
struct2.profile.emails.forEach(x => console.log('struct2 email', x));

// TODO 1e - create history array of previous states, log prior state from it
const history1 = [struct, struct1, struct2];
console.log('prev state history1',
            JSON.stringify(history1[1], null, 2));


/* Using ImmutableJS Maps and Lists for the same steps */

// TODO 2a - create immutablejs istruct, update firstName result istruct1
const istruct = Imm.fromJS(struct); // create immutablejs version of struct
const istruct1 = istruct.setIn(['profile', 'firstName'],
                               'Jessica');

// TODO 2b - create istruct2 from appending to emails in istruct1
const istruct2 = istruct1.updateIn(['profile', 'emails'],
                                   x => x.push('jb@foo.com'));

// TODO 2c - console.log value of firstName
console.log('istruct2 firstName', istruct2.getIn(['profile', 'firstName']));

// TODO 2d - iterate on the emails and console.log each with `.forEach`
// iterate over istruct2 emails and console.log each
istruct2.getIn(['profile', 'emails']).forEach(x => {
  console.log('istruct2 email', x);
});

// TODO 2e - create history array of previous states, log prior state from it
const history2 = [istruct, istruct1, istruct2];
console.log('prev state history2',
            JSON.stringify(history2[1].toJS(), null, 2));


/* Using ImmutableJS Records and Lists */

// TODO 3a - create immutablejs irstruct, update firstName result irstruct1
const profileRecord = Imm.Record({
  firstName: '',
  lastName: '',
  emails: Imm.List()
});
const structRecord = Imm.Record({
  profile: profileRecord(),
  favorites: Imm.List()
});
const irstruct = structRecord({
  profile: profileRecord({
    firstName: 'Jordan',
    lastName: 'Bell',
    emails: Imm.List([
      'jordan@foo.com',
      'jbellfoo@gmail.com'
    ])
  }),
  favorites: Imm.List([
    'http://news.com/item/foo',
    'http://codewinds.com/'
  ])
});
const irstruct1 = irstruct.setIn(['profile', 'firstName'], 'Jessica');

// TODO 3b - create irstruct2 from appending to emails in irstruct1
const irstruct2 = irstruct1.updateIn(['profile', 'emails'],
                                     x => x.push('jb@foo.com'));

// TODO 3c - console.log value of firstName
console.log('irstruct2 firstName', irstruct2.profile.firstName);

// TODO 3d - iterate on the emails and console.log each with `.forEach`
// iterate over irstruct2 emails and console.log each
irstruct2.getIn(['profile', 'emails']).forEach(x => {
  console.log('irstruct2 email', x);
});

// TODO 3e - create history array of previous states, log prior state from it
const history3 = [irstruct, irstruct1, irstruct2];
console.log('prev state history3',
            JSON.stringify(history3[1].toJS(), null, 2));


/* Using Timm immutable helper lib */

// TODO 4a - update firstName from struct into tstruct1 with Timm
const tstruct1 = setIn(struct, ['profile', 'firstName'], 'Jessica');

// TODO 4b - create tstruct2 from appending to emails in tstruct1
const tstruct2 = updateIn(struct1, ['profile', 'emails'],
                          x => x.concat('jb@foo.com'));


// TODO 4c - console.log value of firstName
console.log('tstruct2 firstName', tstruct2.profile.firstName);

// TODO 4d - iterate on the emails and console.log each with `.forEach`
// iterate over tstruct2 emails and console.log each
tstruct2.profile.emails.forEach(x => {
  console.log('tstruct2 email', x);
});

// TODO 4e - create history array of previous states, log prior state from it
const history4 = [struct, tstruct1, tstruct2];
console.log('prev state history4',
            JSON.stringify(history4[1], null, 2));



/* Using Updeep immutble helper lib */

// TODO 5a - update firstName from struct into ustruct1 with Updeep
const ustruct1 = Up({
  profile: {
    firstName: 'Jessica'
  }
}, struct);

// TODO 5b - create ustruct2 from appending to emails in ustruct1
const ustruct2 = Up.updateIn(['profile', 'emails'],
                             x => x.concat('jb@foo.com'),
                             ustruct1);

// TODO 5c - console.log value of firstName
console.log('ustruct2 firstName', ustruct2.profile.firstName);

// TODO 5d - iterate on the emails and console.log each with `.forEach`
// iterate over ustruct2 emails and console.log each
ustruct2.profile.emails.forEach(x => {
  console.log('ustruct2 email', x);
});

// TODO 5e - create history array of previous states, log prior state from it
const history5 = [struct, ustruct1, ustruct2];
console.log('prev state history5',
            JSON.stringify(history5[1], null, 2));


/* Using lodash-fp */

// TODO 6a - update firstName from struct into lstruct1 with lodash-fp
const lstruct1 = fp.merge(struct, {
  profile: {
    firstName: 'Jessica'
  }
});

// TODO 6b - create lstruct2 from appending to emails in lstruct1
const lstruct2 = fp.update('profile.emails',
                           x => x.concat('jb@foo.com'),
                           lstruct1);
console.log('struct1', JSON.stringify(struct, null, 2));
console.log('lstruct1', JSON.stringify(lstruct1, null, 2));
console.log('lstruct2', JSON.stringify(lstruct2, null, 2));

// TODO 6c - console.log value of firstName
console.log('lstruct2 firstName', lstruct2.profile.firstName);

// TODO 6d - iterate on the emails and console.log each with `.forEach`
// iterate over lstruct2 emails and console.log each
lstruct2.profile.emails.forEach(x => {
  console.log('lstruct2 email', x);
});

// TODO 6e - create history array of previous states, log prior state from it
const history6 = [struct, lstruct1, lstruct2];
console.log('prev state history6',
            JSON.stringify(history6[1], null, 2));



/* Convert profileReducer in React/Redux app to ImmutableJS Record/List */

// TODO 7a - convert profileInialState to use Immutable.js Record/List
const profRecord = Imm.Record({
  firstName: '',
  lastName: '',
  emails: Imm.List()
});
const profileInitialState = profRecord({
  firstName: 'Jordan',
  lastName: 'Bell',
  emails: Imm.List([
    'jordan@foo.com',
    'jbellfoo@gmail.com'
  ])
});

// TODO 7b - convert profileReducer to use Immutable.js
function profileReducer(state = profileInitialState, action = {}) {
  switch (action.type) {
    case 'profile/FIELD_UPDATE': // for firstName and lastName updates
      // action.payload = { firstName: 'foo', lastName: 'bar' }
      return state.merge(action.payload);
    case 'profile/ADD_EMAIL':
      // action.payload = 'newemail@foo.com'
      return state.update('emails', x => x.push(action.payload));
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
      <h1>Immutable Solution</h1>
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
