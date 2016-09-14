import './util/polyfill'; // first import polyfills
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import Imm from 'immutable';

// locate a div in our html where we want to render
const appContainerDiv = document.querySelector('#appContainer');


ReactDOM.render(
  <div>
    <h1>Immutable</h1>
    <ul>
      <li>Easier to reason about</li>
      <li>Referential equality</li>
      <li>Thread-safe</li>
        <ul>
          <li>JS may eventually get shared memory for workers</li>
          <li>SharedArrayBuffer is first experiment</li>
        </ul>
    </ul>
  </div>,
  appContainerDiv
);


// ReactDOM.render(<h1>Immutable</h1>, appContainerDiv);

/* Object spread */

// const state0 = {
//   a: 1,
//   b: 2
// };
//
// const state1 = {
//   ...state0,
//   a: 100,
//   c: 300
// };
//
// console.log('state0', state0);
// console.log('state1', state1);


/*
ReactDOM.render(
  <div>
    <h1>Immutable.js</h1>
    <ul>
      <li>Persistent Data Structures</li>
        <ul>
          <li>Structural sharing</li>
          <li>Audit history</li>
          <li>Undo/redo</li>
        </ul>
      <li>JS familiar API</li>
    </ul>
  </div>,
  appContainerDiv
);
*/


/* ImmutableJS maps */

// const state0 = Imm.Map({
//   a: 1,
//   b: 2
// });
//
// const state1 = state0
//   .set('a', 100)
//   .set('c', 300);
//
// const state2 = state0
//   .merge({
//     a: 1000,
//     c: 3000
//   });
//
// console.log('state0', state0.toJS());
// console.log('state1', state1.toJS());
// console.log('state2', state2.toJS());
// console.log('state0.get(a)', state0.get('a'));



// const deep0 = Imm.fromJS({
//   a: {
//     aa: {
//       aaa: 'hello',
//       bbb: 'world'
//     }
//   }
// });
//
// const deep1 = deep0
//   .setIn(['a', 'aa', 'aaa'], 'greetings');
//
// const deep2 = deep0
//   .updateIn(['a', 'aa', 'bbb'],
//             x => `cruel ${x}`);
//
// const deep3 = deep0
//   .updateIn(['c', 'cc', 'ccc'],
//             x => 'nice');
//
// console.log('deep0', JSON.stringify(deep0, null, 2));
// console.log('deep1', JSON.stringify(deep1, null, 2));
// console.log('deep2', JSON.stringify(deep2, null, 2));
// console.log('deep3', JSON.stringify(deep3, null, 2));
// console.log('deep0 aaa', deep0.getIn(['a', 'aa', 'aaa']));


/* ImmutableJS Lists */

// const list0 = Imm.List([1, 2, 3]);
// const list1 = list0.push(4);
// const list2 = Imm.fromJS([10, 20, 30]);
//
// console.log('list0', list0.toJS());
// console.log('list1', list1.toJS());
// console.log('list2', list2.toJS());
// console.log('list2.get(0)', list2.get(0));
//
// const list3 = list0.map(x => x * 1000);
// console.log('list3', list3.toJS());
//
// const list4 = list3.set(1, 'a');
// const list5 = list3.updateIn([0], x => x+0.1);
// console.log('list4', list4.toJS());
// console.log('list5', list5.toJS());


/* ImmutableJS withMutations */

// const state0 = Imm.fromJS({
//   a: 1,
//   b: [10, 20, 30],
//   c: {
//     cc: {
//       ccc: 'hello'
//     }
//   }
// });
//
// const state1 = state0.withMutations(map => {
//   map
//     .set('a', 10)
//     .merge({
//       d: 40,
//       e: 41
//     });
// });
//
//
// console.log('state0', JSON.stringify(state0, null, 2));
// console.log('state1', JSON.stringify(state1, null, 2));


/* ImmutableJS updateIn, mergeIn mixed maps+lists */

// const state0 = Imm.fromJS({
//   a: 1,
//   b: {
//     bb: [10, 20, 30]
//   },
//   c: {
//     cc: {
//       ccc: 'hello'
//     }
//   }
// });
//
// const state1 = state0
//   .updateIn(['b', 'bb', 2], x => x * 100);
//
// const state2 = state0
//   .updateIn(['d', 'dd', 'ddd'], x => 'yay');
//
// const state3 = state0
//   .updateIn(['b', 'bb'], x => x.push(40));
//
// const state4 = state0
//   .mergeIn(['c', 'cc'],
//            Imm.Map({
//              cc1: 'foo',
//              cc2: 'bar'
//            }));
//
// console.log('state0', JSON.stringify(state0, null, 2));
// console.log('state1', JSON.stringify(state1, null, 2));
// console.log('state2', JSON.stringify(state2, null, 2));
// console.log('state2 b.bb[0]', state2.getIn(['b', 'bb', 0]));
// console.log('state3', JSON.stringify(state3, null, 2));
// console.log('state4', JSON.stringify(state4, null, 2));


/* ImmutableJS Records */

// const ItemRecord = Imm.Record({
//   id: null,
//   name: '',
//   desc: ''
// });
//
// const itemFoo = ItemRecord({ id: 100, name: 'Foo' });
// const itemBar = ItemRecord({ id: 101,
//                              name: 'Bar',
//                              desc: 'Bar desc',
//                              bad: 23 });
//
// const list0 = Imm.fromJS([
//   itemFoo,
//   itemBar
// ]);
//
// console.log('list0', JSON.stringify(list0, null, 2));
// console.log('itemFoo.id', itemFoo.id);
// console.log('itemFoo.name', itemFoo.name);
//
//
// const itemFoo2 = itemFoo.set('desc', 'Foo desc');
// const itemBar2 = itemBar.update('name', x => `${x}BAR`);
// console.log('itemFoo2', itemFoo2.toJS());
// console.log('itemBar2', itemBar2.toJS());
//
// const list1 = list0.updateIn([0, 'name'],
//                              x => `${x}!!!`);
// console.log('list1', JSON.stringify(list1, null, 2));



/* ImmutableJS Nested Records */


// const CategoryRecord = Imm.Record({
//   clothing: 'Clothing',
//   jewelry: 'Jewelry',
//   sports: 'Sports'
// });
//
// const CartRecord = Imm.Record({
//   message: '',
//   items: Imm.List(),
//   categories: CategoryRecord()
// });
//
// const ItemRecord = Imm.Record({ id: null, name: '' });
//
// const itemFoo = ItemRecord({ id: 100, name: 'Foo' });
// const itemBar = ItemRecord({ id: 101, name: 'Bar' });
//
// const cart0 = CartRecord({
//   message: 'Initial'
// });
//
// const cart1 = cart0.updateIn(['items'], x => x.push(itemFoo));
// const cart2 = cart1.updateIn(['items'], x => x.push(itemBar));
// console.log('cart0', JSON.stringify(cart0, null, 2));
// console.log('cart1', JSON.stringify(cart1, null, 2));
// console.log('cart2', JSON.stringify(cart2, null, 2));
// console.log('cart2.categories.clothing',
//             cart2.categories.clothing);



/* ImmutableJS Redux */

// const CategoryRecord = Imm.Record({
//   clothing: 'Clothing',
//   jewelry: 'Jewelry',
//   sports: 'Sports'
// });
//
// const CartRecord = Imm.Record({
//   message: '',
//   items: Imm.List(),
//   categories: CategoryRecord()
// });
//
// const ItemRecord = Imm.Record({ id: null, name: '' });
//
// function cartReducer(state = CartRecord(), action = {}) {
//   switch (action.type) {
//     case 'UPDATE_MESSAGE':
//       return state.set('message', action.payload);
//     case 'ADD_TO_CART':
//       return state.update('items',
//                           list => list.push(ItemRecord(action.payload)));
//     case 'CLEAR_CART':
//       return state.set('items', Imm.List());
//     default:
//       return state;
//   }
// }
//
// const store = createStore(cartReducer);
//
// store.subscribe(() => {
//   console.log('store', JSON.stringify(store.getState(), null, 2));
// });
//
// store.dispatch({ type: 'UPDATE_MESSAGE',
//                  payload: 'hello' });
// store.dispatch({ type: 'ADD_TO_CART',
//                  payload: { id: 101, name: 'Foo' }});
// store.dispatch({ type: 'ADD_TO_CART',
//                  payload: { id: 102, name: 'Bar' }});
// store.dispatch({ type: 'CLEAR_CART' });


/* p2 combineReducers mixing ImmutableJS and non */

// function fooReducer(state = { greeting: ''}, action = {}) {
//   switch (action.type) {
//     case 'FOO_MESSAGE':
//       return {
//         ...state,
//         greeting: action.payload
//       };
//     default:
//       return state;
//   }
// }
//
// const rootReducer = combineReducers({
//   cart: cartReducer, /* uses ImmutableJS */
//   foo: fooReducer  /* just uses Object spread */
// });
//
// const store2 = createStore(rootReducer);
//
// store2.subscribe(() => {
//   console.log('store2', JSON.stringify(store2.getState(), null, 2));
// });
//
// store2.dispatch({ type: 'UPDATE_MESSAGE',
//                  payload: 'Wow' });
// store2.dispatch({ type: 'ADD_TO_CART',
//                  payload: { id: 102, name: 'Cat' }});
// store2.dispatch({ type: 'FOO_MESSAGE',
//                   payload: 'fantastic' });


/* Optional to combineReducers into a single ImmutableJS
  use combineReducers from 'redux-immutablejs'
   https://github.com/indexiatech/redux-immutablejs */

/*
ReactDOM.render(
  <div>
    <h1>Timm</h1>
    <ul>
      <li>Immutability Helper</li>
      <li>Use plain JS objects</li>
      <li>Lightweight</li>
      <li>Outperforms Immutable.js until large arrays or objects</li>
    </ul>
  </div>,
  appContainerDiv
);
*/


/* Timm Immutable Helper
   http://guigrpa.github.io/timm/  */

// import { merge, mergeIn, set, setIn, update, updateIn } from 'timm';
//
// const state0 = {
//   a: 1,
//   b: {
//     bb: [10, 20, 30]
//   },
//   c: {
//     cc: {
//       ccc: 'hello'
//     }
//   }
// };
//
// const state1 = set(state0, 'a', 10);
// const state2 = updateIn(state0,
//                         ['b', 'bb'],
//                         list => list.concat(40));
// const state3 = merge(state0,
//                      {
//                        d: 'dog',
//                        e: 'egg'
//                      });
//
// console.log('state0', JSON.stringify(state0, null, 2));
// console.log('state1', JSON.stringify(state1, null, 2));
// console.log('state2', JSON.stringify(state2, null, 2));
// console.log('state3', JSON.stringify(state3, null, 2));

/*
ReactDOM.render(
  <div>
    <h1>Updeep</h1>
    <ul>
      <li>Immutability Helper</li>
      <li>Uses plain JS objects</li>
      <li>Freezes objects in development</li>
      <li>More comprehensive API</li>
    </ul>
  </div>,
  appContainerDiv
);
*/

/*
  Updeep Immutable Helper
   https://github.com/substantial/updeep
   Note: compile with NODE_ENV='production' to skip freezing
*/

// import Up from 'updeep';
//
// const state0 = {
//   a: 1,
//   b: {
//     bb: [10, 20, 30]
//   },
//   c: {
//     cc: {
//       ccc: 'hello'
//     }
//   }
// };
//
// const state1 = Up({ a: 10 }, state0);
// const state2 = Up.updateIn(['b', 'bb'],
//                            list => list.concat(40),
//                            state1);
// const state3 = Up({
//   d: 'dog',
//   e: 'egg'
// }, state0);
//
// console.log('state0', JSON.stringify(state0, null, 2));
// console.log('state1', JSON.stringify(state1, null, 2));
// console.log('state2', JSON.stringify(state2, null, 2));
// console.log('state3', JSON.stringify(state3, null, 2));
