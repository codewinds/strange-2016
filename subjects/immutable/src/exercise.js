import './util/polyfill'; // first import polyfills
import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';

/*
   Immutable Exercise

   Immutability w/o ImmutableJS nor using any immutable helper libs

   1. In an immutable fashion create a new struct `struct1` which updates
   the firstName of struct to 'Jessica' without using ImmutableJS or
   any helper libs. Hint: you might use Object spread or Object.assign

   2. In an immutable fashion create a new struct `struct2` based on
   struct1 which appends a new email `jb@foo.com` w/o ImmutableJS or
   any helper libs.

   3. Console.log the value of firstName

   4. Iterate on the emails and console.log each with `.forEach`

   5. Create an array of states called `history` which contains each
   of the previous states. Console.log the state just prior to the current

   ImmutableJS

   Repeating steps 1-5 but now using ImmutableJS with Maps and Lists

   6. Create immutablejs structure

   ...


   ImmutableJS with Records and Lists

   ...


   Using Timm immutable helper lib

   ...

   Using Updeep immutble helper lib

   ...


   Convert one reducr in a React/Redux app to using ImmutableJS

   ...








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

// performing deep-freeze to help ensure you are not mutating struct
// For performance you would not likely do this in production mode
deepFreeze(struct);

// You can uncomment these to see that mutations will not be allowed
// struct.favorites.push('this should not work if frozen');
// struct.profile.firstName = 'neither will this';












function render() {
  ReactDOM.render(<div>Immutable Exercise</div>, appContainerDiv);
}

render();
