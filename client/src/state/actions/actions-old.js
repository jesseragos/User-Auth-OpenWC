export const INCREMENT_PAGE = 'INCREMENT_PAGE';

export const incrementPage = val => {
  return {
    type: INCREMENT_PAGE,
    payload: val,
  };
};
