import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//NEW IMPORTS HERE
import store from './store'
import { Provider } from 'react-redux' //Notice react-redux, not redux. 

//Index is very commonly used for setup.  We don't do routes, or other actual code in here.  Just wire up pieces.

//Putting the provider here gives it top level access to the whole app so it can tell React to render when needed.
let topLevelComponentWithStore = ( 
    <Provider store={store}>
        <App />
</Provider>)

ReactDOM.render(topLevelComponentWithStore, document.getElementById('root'));
registerServiceWorker();
