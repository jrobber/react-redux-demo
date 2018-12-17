import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Putting the provider here gives it top level access to the whole app so it can tell React to render when needed.
let topLevelComponentWithStore = (<App />,
ReactDOM.render(topLevelComponentWithStore, document.getElementById('root')));
registerServiceWorker();
