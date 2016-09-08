import './util/polyfill'; // first import polyfills
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

/*
   React.js Exercise Steps:

   1. Create a catalog component which takes a property `items`
     and displays them in a table. Items is an array of objects
     with an id and a name. You may start with a hardcoded
     array for this first step. It also should take another
     property `datetime` in which you will pass the current
     JS date. Include a formatted version of this above your
     table indicating when the data was refreshed.

   2. Using axios, fetch, or similar xhr mechanism, fetch the data
     from `/fake-api.json` and use this data to render your catalog
     component. You can visit this data in your web browser
     using `http://localhost:3005/fake-api.json`
     (That mock data lives in strange-2016/public/fake-api.json)

   3. Create a button in your Catalog that when clicked will cause
     the data to be refreshed (refetched and rerendered). It should
     also update the `datetime` property in the process. You will
     pass in an `onRefresh` property which will be a function that
     causes the data to be refreshed and rerendered.

   4. Create and render an app component which uses your catalog
      component passing in the data. Your app component should
      receive all its data from props passing it down to
      the catalog component's props. In this way we are beginning
      to use composition to build up our program.

   5. Move your catalog component to a separate file which uses
      `export default Catalog;` to export your component.
      Then in this file, `import Catalog from './catalog';` using
      whatever filename you moved the code into.
      By separating the code into different files we are modularizing
      our codebase, helping us to focus on one component at a time.

   6. Create another Profile component in a separate file and import
      that component and add it below your Catalog component in your App.
      It should take two properties `firstName` and `lastName`.
      It should display the fullname when it renders.
      Pass this new data in as props to App and have it pass it down
      to your Profile component. Hardcode the data for the profile.

   7. Add some basic PropTypes for Catalog and Profile

   8. Add `even` and `odd` class to your table rows. Hint: you will be
      setting the attribute `className`.

 */


const appContainerDiv = document.querySelector('#appContainer');

function render() {
  ReactDOM.render(<div>React.js Exercises</div>, appContainerDiv);
}

render();
