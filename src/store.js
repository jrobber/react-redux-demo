import { createStore } from 'redux'; //Notice redux, not react-redux
import reducer from './reducer';

let store = createStore(reducer);

export default store; //The store is used in index.js by the react-redux top level provider


//STORE WITH MIDDLEWARE
// import { createStore } from 'redux'; //Notice redux, not react-redux
// import reducer from './reducer';
// import promiseMiddleware from 'redux-promise-middleware';

// let createStoreWithMiddleware = applyMiddleware(
//   promiseMiddleware()
// )(createStore);

// let store = createStoreWithMiddleware(reducer);

// export default store; //The store is used in index.js by the react-redux top level provider




