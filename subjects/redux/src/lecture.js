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
//
// console.log('obj', obj);



/* action reducer */

// const initialState = {
//   cartItems: []
// };
//
// function reducer(state = initialState,
//                  action = {}) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         ...state,
//         cartItems: state.cartItems.concat(
//           action.payload)
//       };
//     default:
//       return state;
//   }
// }
//
// const state0 = reducer();
// console.log('state0', state0);
// const state1 = reducer(state0,
//                        { type: 'ADD_TO_CART',
//                          payload: { id: 101 }
//                        });
// console.log('state1', state1);



/* redux store */

// const initialState = {
//   cartItems: []
// };
//
// function reducer(state = initialState,
//                  action = {}) {
//   switch (action.type) {
//   case 'ADD_TO_CART':
//     return {
//       ...state,
//       cartItems: state.cartItems.concat(
//         action.payload)
//     };
//   default:
//     return state;
//   }
// }
//
// const store = createStore(reducer);
//
// store.subscribe(() => {
//   console.log('state', store.getState());
// });
//
// store.dispatch({ type: 'ADD_TO_CART',
//                  payload: { id: 101 }
//                });
// store.dispatch({ type: 'ADD_TO_CART',
//                  payload: { id: 201 }
//                });



/* redux simple render and dev tools
   https://github.com/zalmoxisus/redux-devtools-extension */

// const initialState = {
//   cartItems: []
// };
//
// function reducer(state = initialState,
//                  action = {}) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         ...state,
//         cartItems: state.cartItems.concat(
//           action.payload)
//       };
//     default:
//       return state;
//   }
// }
//
// const enhancer = (window.devToolsExtension) ?
//       window.devToolsExtension() :
//       f => f;
// const store = createStore(reducer, undefined, enhancer);
//
// store.subscribe(() => {
//   const state = store.getState();
//   console.log('state', state);
//   ReactDOM.render(<App cartItems={ state.cartItems} />,
//                   appContainerDiv);
// });
//
//
// function App({ cartItems }) {
//   return (
//       <div>
//         <h1>Cart</h1>
//         <ul>
//           { cartItems.map(item => (
//             <li key={item.id}>{ item.name }</li> )) }
//         </ul>
//       </div>
//   );
// }
//
// store.dispatch({ type: 'ADD_TO_CART',
//                  payload: { id: 101, name: 'Foo' }
//                });
//
// setTimeout(() => {
//   store.dispatch({ type: 'ADD_TO_CART',
//                    payload: { id: 201, name: 'Bar' }
//                  });
// }, 2000);



/* react-redux */
import { connect } from 'react-redux';

const initialState = {
  cartItems: []
};

function reducer(state = initialState,
                 action = {}) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: state.cartItems.concat(
          action.payload)
      };
    default:
      return state;
  }
}

const enhancer = (window.devToolsExtension) ?
                 window.devToolsExtension() :
                 f => f;
const store = createStore(reducer, undefined, enhancer);

store.subscribe(() => {
  const state = store.getState();
  console.log('state', state);
  ReactDOM.render(<App cartItems={ state.cartItems} />,
                  appContainerDiv);
});


function App({ cartItems }) {
  return (
    <div>
    <h1>Cart</h1>
    <ul>
    { cartItems.map(item => (
      <li key={item.id}>{ item.name }</li> )) }
    </ul>
    </div>
  );
}

store.dispatch({ type: 'ADD_TO_CART',
                 payload: { id: 101, name: 'Foo' }
});

setTimeout(() => {
  store.dispatch({ type: 'ADD_TO_CART',
                   payload: { id: 201, name: 'Bar' }
  });
}, 2000);
