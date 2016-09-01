import './util/polyfill'; // first import polyfills
import React from 'react';
import ReactDOM from 'react-dom';

// locate a div in our html where we want to render
const appContainerDiv = document.querySelector('#appContainer');

/* stateless function component */
// function App({ prefix }) {
//   return (
//       <div>
//         <h1>{ prefix } Strange Loop!!!</h1>
//         <div>using stateless function component</div>
//       </div>
//   );
// }

/* ES6 class component */
// class App extends React.Component {
//   render() {
//     const { prefix } = this.props;
//     return (
//       <div>
//         <h1>{ prefix } Strange Loop!!!</h1>
//         <div>using ES6 class component</div>
//       </div>
//     );
//   }
// }

/* without JSX */
// function App({ prefix }) {
//   return React.createElement('div', {},
//     React.createElement('h1', {},
//       `${prefix} Strange Loop!`));
// }

// function render() {
//   const greeting = 'Hello';
//   ReactDOM.render(<App prefix={greeting} />, appContainerDiv);
// }

// render();


/* re-rendering */

// function render() {
//   const now = new Date();
//   ReactDOM.render(<div>The time is: { now.toLocaleString() }</div>,
//                   appContainerDiv);
// }

// setInterval(render, 1000);
