import { createLogic } from 'redux-logic';
import { selectors as profileSel } from './profileReducer';

function validateFields(fields) {
  const errors = [];
  if (!fields.firstName) {
    errors.push('first name is required');
  }
  if (!fields.lastName) {
    errors.push('last name is required');
  }
  return errors;
}

const profileFieldsUpdateLogic = createLogic({
  type: 'profile/FIELDS_UPDATE',

  // if valid pass action, otherwise reject with invalid action
  validate({ getState, action }, allow, reject) {
    const fields = profileSel.fields(getState());
    const mergedFields = { // apply updates to get complete fields
      ...fields,
      ...action.payload
    };
    const errors = validateFields(mergedFields);
    if (errors.length === 0) {
      allow(action);
    } else { // we have errors, reject with invalid action
      reject({
        type: 'profile/FIELDS_INVALID',
        payload: {
          errors,
          updates: action.payload
        }
      });
    }
  }
});

export default [
  profileFieldsUpdateLogic
];
