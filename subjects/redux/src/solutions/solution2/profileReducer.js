// unique key used for combineReducers
// also by convention used as a prefix for related actions
export const key = 'profile';

export const selectors = {
  errors: state => state[key].errors,
  fields: state => state[key].fields
};

const initialState = {
  errors: [],
  fields: {
    firstName: '',
    lastName: ''
  }
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'profile/FIELDS_UPDATE':
      return {
        ...state,
        fields: {
          ...state.fields,
          ...action.payload
        },
        errors: []
      };
    case 'profile/FIELDS_INVALID':
      return {
        ...state,
        fields: {
          ...state.fields,
          ...action.payload.updates
        },
        errors: action.payload.errors
      };
    default:
      return state;
  }
}
