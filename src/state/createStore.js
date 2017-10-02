import { createStore as reduxCreateStore } from 'redux';

const initialState = {
  isIntroDone: false
};

const reducer = (state, action) => {
  return { ...state, ...action.payload };
};

const createStore = () =>
  reduxCreateStore(
    reducer,
    initialState
  );

export default createStore;
