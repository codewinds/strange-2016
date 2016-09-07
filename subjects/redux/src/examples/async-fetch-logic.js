import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import { createLogic, createLogicMiddleware } from 'redux-logic';

const appContainerDiv = document.querySelector('#appContainer');

const actions = {
  itemFetch(ev) {
    return { type: 'ITEM_FETCH' };
  }
};

const fetchLogic = createLogic({
  type: 'ITEM_FETCH', // filter for these types
  latest: true, // take response from latest request only

  process({ getState, action }, dispatch) {
    axios.get('/fake-api.json')
         .then(resp => resp.data.items) /* items property of payload */
         .then(items => dispatch({
           type: 'ITEM_FETCH_SUCCESS',
           payload: items
         }))
         .catch(err => dispatch({
           type: 'ITEM_FETCH_FAILED',
           payload: err,
           error: true
         }));
  }
});

const arrLogic = [fetchLogic];
const logicMiddleware = createLogicMiddleware(arrLogic);

const initialState = {
  status: '',
  items: []
};

function rootReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'ITEM_FETCH':
      return {
        ...state,
        status: 'fetching...'
      };
    case 'ITEM_FETCH_SUCCESS':
      return {
        ...state,
        items: action.payload,
        status: ''
      };
    case 'ITEM_FETCH_FAILED':
      return {
        ...state,
        status: action.payload.toString()
      };
    default:
      return state;
  }
}

const enhancer = compose(
  applyMiddleware(logicMiddleware),
  (window.devToolsExtension) ?
    window.devToolsExtension() :
    f => f
);
const store = createStore(rootReducer, undefined, enhancer);

function Catalog({ items, status, fetchItem }) {
  return (
    <div>
    <h2>Catalog (logic)</h2>
    <div>Status: {status}</div>
    <button onClick={fetchItem}>Fetch</button>
    <ul>
    { items.map(item => (
      <li key={item.id}>{ item.name }</li>)) }
    </ul>
    </div>
  );
}

const CCatalog = connect(
  state => ({
    items: state.items,
    status: state.status
  }),
  {
    fetchItem: actions.itemFetch
  }
)(Catalog);

function App() {
  return (
    <Provider store={store} >
      <CCatalog />
    </Provider>
  );
}

ReactDOM.render(<App />, appContainerDiv);
