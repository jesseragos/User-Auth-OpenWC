import { INCREMENT_PAGE } from './actions';

const initialState = {
  title: 'Increment or decrement a number',
  page: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + action.payload,
      };
    default:
      return state;
  }
};
