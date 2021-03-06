import './util/polyfill'; // first import polyfills
import React from 'react';
import ReactDOM from 'react-dom';

// locate a div in our html where we want to render
const appContainerDiv = document.querySelector('#appContainer');

/* stateless function component */
function App({ prefix }) {
  return (
      <div>
        <h1>{ prefix } Strange Loop!!!</h1>
        <div>using React.js stateless function component</div>
        <h2>React.js is V=f(x)</h2>
        <ul>
          <li>Compatible with functional code + immutable values</li>
          <li>Simple to learn</li>
          <li>Composable Components</li>
          <li>Easy to migrate existing projects</li>
          <li>Path to native and desktops</li>
        </ul>
      </div>
  );
}

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

/* old createClass way */
// const App = React.createClass({
//   render() {
//     return <div>Old way</div>;
//   }
// });

/* without JSX */
// function App({ prefix }) {
//   return React.createElement('div', {},
//     React.createElement('h1', {},
//       `${prefix} Strange Loop!`));
// }

function render() {
  const greeting = 'Hello';
  ReactDOM.render(<App prefix={greeting} />, appContainerDiv);
}
render();


/* example with id and className */
// function App({ prefix }) {
//   return (
//       <div id="app" className="message">{ prefix } Strange Loop</div>
//   );
// }

/* re-rendering */

// function render() {
//   const now = new Date();
//   ReactDOM.render(<div>The time is: { now.toLocaleString() }</div>,
//                   appContainerDiv);
// }
//
// setInterval(render, 1000);


/* composition */

// ReactDOM.render(<App />, appContainerDiv);
//
// function App() {
//   return (
//     <div>
//       <Heading />
//       <Foo />
//     </div>
//   );
// }
//
// function Heading() {
//   return (
//     <h1>My heading</h1>
//   );
// }
//
// function Foo() {
//   return (
//     <div>Foo</div>
//   );
// }


/* fetching data with Axios, iterating with map */
// import axios from 'axios';
//
// axios.get('/fake-api.json')
//   .then(resp => resp.data.items)
//   .then(items => render(items));
//
// function render(items) {
//   ReactDOM.render(<App widgets={items} />, appContainerDiv);
// }
//
// function App({ widgets }) {
//   return (
//     <div>
//       <h1>Widgets</h1>
//       <ul>
//       { widgets.map(w => (
//           <li key={w.id}>{w.name}</li> )) }
//       </ul>
//     </div>
//   );
// }


/* conditional logic using && */

// ReactDOM.render(<App navShown={true} />, appContainerDiv);
//
// function App({ navShown }) {
//   return (
//     <div>
//       { navShown && <Nav /> }
//       <div>main content</div>
//     </div>
//   );
// }
//
// function Nav() {
//   return (
//     <section>Nav here</section>
//   );
// }


/* conditional logic using functions */

// ReactDOM.render(<App navShown={true} />, appContainerDiv);
//
// function App({ navShown }) {
//   return (
//     <div>
//       { navDisplay() }
//       <div>main content</div>
//     </div>
//   );
//
//   function navDisplay() {
//     if (!navShown) { return null; }
//     return <Nav />;
//   }
// }
//
// function Nav() {
//   return (
//     <section>Nav here</section>
//   );
// }



/* button onClick */

// function buyClicked(ev) {
//   console.log('buyClicked', ev.target);
// }
//
// ReactDOM.render(<App buyClicked={buyClicked} />, appContainerDiv);
//
// function App({ buyClicked }) {
//   return (
//       <button onClick={buyClicked}>Buy</button>
//   );
// }



/* forms */

// ReactDOM.render(<App formChange={formChange}
//                      formSubmit={formSubmit} />, appContainerDiv);
//
// function App({ formChange, formSubmit }) {
//   return (
//       <form onSubmit={formSubmit} >
//       <input name="first" placeholder="First Name"
//              onChange={formChange} />
//       <input name="last" placeholder="last Name"
//              onChange={formChange} />
//       <button>Submit</button>
//       </form>
//   );
// }
//
// function formChange(ev) {
//   console.log('formChange', ev.target.name, ev.target.value);
// }
//
// function formSubmit(ev) {
//   ev.preventDefault(); // prevent the normal form submit
//   console.log('formSubmit');
// }



/* prop types
   https://facebook.github.io/react/docs/reusable-components.html#prop-validation */
// function App({ greeting }) {
//   return (
//       <div>{ greeting } Strange Loop</div>
//   );
// }
// App.propTypes = {
//   greeting: React.PropTypes.string.isRequired
// };
//
// ReactDOM.render(<App />, appContainerDiv);
//
// const greeting = 'Hello';
// ReactDOM.render(<App greeting={greeting} />, appContainerDiv);
