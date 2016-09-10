// polyfill already imported
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

/*
   Redux Solution 1 (for steps 1-11):

   (See Solution 2 for completion of all steps 1-20)

   1. Create the initialState for a profile component, it will need
   `firstName` and `lastName` both empty strings.

   2. Create a reducer which uses the initialState and responds to
   an action of 'FIELDS_UPDATE' with an action payload of
   { firstName: 'updatedFirstName' } OR
   { lastName: 'updatedLastName' } OR
   { firstName: 'foo', lastName: 'bar' }
   Also don't forget to handle default case, returning state as is

   3. Create a Redux store which uses this reducer

   4. Output the beginning state of store.getState() with console.log

   5. Create a listener function that subscribes to the store's changes
   and output the new state on every change.

   6. Dispatch an action to update the first name
   { type: 'FIELDS_UPDATE', payload: { firstName: 'newFirstName' }}
   You should be seeing the appropriate updates in the console output

   7. Dispatch an action to update the last name
   { type: 'FIELDS_UPDATE', payload: { lastName: 'newLastName' }}
   You should see another console log

   8. Dispatch an action that would update both first and last name
   { type: 'FIELDS_UPDATE', payload: {
   firstName: 'Wendy', lastName: 'Brown' }}
   You should see another console log

   9. Using the provided Profile component along with react-redux
   create a container component CProfile which is connects your
   redux store profile data to props `firstName` and `lastName`.
   Also in connect, bind `actions.fieldsUpdate` to dispatch and
   inject as `fieldsUpdate` into props.
   Hint: you will use react-redux `connect()`

   10. Use this new container component CProfile in the provided
   App component.

   11. In `ReactDOM.render()` wrap our App component with the
   react-redux `Provider` HOC so that it can provide store
   data through the context to our container component CProfile


   BONUS STEPS *** See solution2

 */


const appContainerDiv = document.querySelector('#appContainer');

const actions = {
  fieldsUpdate(ev) {
    return { type: 'FIELDS_UPDATE',
             payload: { [ev.target.name]: ev.target.value }};
  }
};

const initialState = {
  firstName: '',
  lastName: ''
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'FIELDS_UPDATE':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log('beginning state', store.getState());

store.subscribe(() => {
  const state = store.getState();
  console.log('updated state', state);
});

store.dispatch({ type: 'FIELDS_UPDATE',
                 payload: { firstName: 'newFirstName' }});

store.dispatch({ type: 'FIELDS_UPDATE',
                 payload: { lastName: 'newLastName' }});

store.dispatch({ type: 'FIELDS_UPDATE',
                 payload: { firstName: 'Wendy', lastName: 'Brown' }});


function Profile({ firstName, lastName, fieldsUpdate }) {
  return (
    <div>
      <h3>Profile Update</h3>
      <input name='firstName' value={firstName}
             placeholder='First Name'
             onChange={fieldsUpdate} />
      <input name='lastName' value={lastName}
             placeholder='Last Name'
             onChange={fieldsUpdate} />
      <h3>Preview</h3>
      <div className="preview">{ firstName } { lastName }</div>
    </div>
  );
}
Profile.propTypes = {
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string.isRequired,
  fieldsUpdate: React.PropTypes.func.isRequired
};

const CProfile = connect(
  state => ({
    firstName: state.firstName,
    lastName: state.lastName
  }),
  {
    fieldsUpdate: actions.fieldsUpdate
  }
)(Profile);

function App() {
  return (
    <div>
    <h2>Redux Solution 1</h2>
    <CProfile />
    </div>
  );
}

function render() {
  ReactDOM.render(
    <Provider store={store} >
    <App />
    </Provider>,
    appContainerDiv
  );
}

render();
