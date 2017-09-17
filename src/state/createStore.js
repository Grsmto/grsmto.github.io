import { createStore as reduxCreateStore } from 'redux';

const initialState = {
  isIntroDone: false
};

const reducer = (state, action) => {
  return { ...state, ...action.payload };
}

const createStore = () => reduxCreateStore(
  reducer,
  initialState,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default createStore;
