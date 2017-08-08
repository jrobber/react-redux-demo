import { createStore, combineReducers } from 'redux'; //Notice redux, not react-redux
import reducer from './reducer';
//We should be importing the default so we can name these what we want

let store = createStore(combineReducers({
    reducer
    //reducer2,
    //cartReducer,
    //productsReducer
    //each property here creates a new level of the redux tree.  
    //We'll need to use dot notation to walk into state.cartReducer.totalItems
}));

export default store; //The store is used in index.js by the react-redux top level provider