import './util/polyfill'; // first import polyfills
import React from 'react';
import ReactDOM from 'react-dom';

/*
   Redux Exercise:

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


   PREPARING FOR FUTURE APP GROWTH

   12. Preparing for this application to grow with more reducers,
       introduce redux `combineReducers` and use the key 'profile'
       for your profileReducer. Assign 'profile' to a constant and
       use it as a prefix for your profile actions and in the
       profile reducer.

   13. Create a selector object `profileSel` with a selector for
       `fields`. Remember that a selector is a function that takes
       the global state from your store and returns just the fields
       object. Locate this selector with your profile reducer in
       its own file. You will export both the `profileSel` object,
       the profile `key`, as well as the `profileReducer` and you
       will import and use them in this file.

    14. Use the imported `profileSel.fields` selector in the connect
        for your CProfile container. By using a selector to locate
        data in our global state, we are free to make changes in our
        profile reducer structure as long as we always update the
        associated selector.

    ADDING VALIDATION USING REDUX-LOGIC

    15. Using redux `applyMiddleware` add redux-logic
        Hint: use redux-logic createLogicMiddleware with an empty logic
        array to start with. Add the logicMiddlware using applyMiddleware

    16. Add `errors` to your profileReducer initialState. It will be an
        array of string error messages, initially empty array. Add
        a `errors` selector to profileSel.

    17. In your profileReducer, handle the action type
        `profile/FIELDS_INVALID` it will look like this
        { type: 'profile/FIELDS_INVALID', payload: {
          errors: ['first name is required'],
          updates: { firstName: '' }}}
        You will update the fields using the properties from `updates`
        and update errors using the array from `errors`
        Also in your `profile/FIELDS_UPDATE` handler set errors
        to empty array for the valid case.

    18. Update your Profile component to accept a prop for `errors`.
        Add to the propTypes.

    19. Connect your errors from the store in the connect for CProfile
        using `profileSel.errors` selector.

    20. Create a profileFieldsUpdateLogic using redux-logic createLogic
        which listens for your `profile/FIELDS_UPDATE` action.
        It should have a validate hook which uses getState and action
        to determine the new set of validation errors which are that
        both firstName and lastName must exist.
        If valid, call `allow()` with the original action `allow(action)`
        otherwise call `reject(newAction)` with a new action of type
        `profile/FIELDS_INVALID` and a payload object containing
         `errors` array and `updates` object of field updates.
        Add profileFieldsUpdateLogic to your arrLogic passed into
        createLogicMiddleware.

        Now this logic will be called anytime FIELDS_UPDATE is
        dispatched and if valid it will allow it through as is,
        otherwise it will instead dispatch a FIELDS_INVALID action
        which also contains the errors. All errors should be displayed
        in red above the input fields. Clear out values to verify.

 */


const appContainerDiv = document.querySelector('#appContainer');

const actions = {
  fieldsUpdate(ev) {
    return { type: 'FIELDS_UPDATE',
             payload: { [ev.target.name]: ev.target.value }};
  }
};


// TODO: 1 - What will your initialState be?
// const initialState = ?


// TODO: 2 - Create reducer which handles FIELDS_UPDATE
function reducer(state = initialState, action = {}) {
  // TODO handle FIELDS_UPDATE and provide default fall through
}

// TODO: 3 - Create Redux store using redux createStore
// const store = ?

// TODO: 4 - console.log beginning store state

// TODO: 5 - create store listener which outputs the current
// state to console.log on every state change

// TODO: 6,7,8 - dispatch actions to store


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


// TODO: 9 - create container CProfile for Profile w/ react-redux connect
// const CProfile = ?


// TODO: 10 - use CProfile in App
function App() {
  return (
    <div>
      <h2>Redux Exercise</h2>
    </div>
  );
}

// TODO: 11 - wrap App with react-redux Provider
function render() {
  ReactDOM.render(
    <App />,
    appContainerDiv
  );
}

render();
