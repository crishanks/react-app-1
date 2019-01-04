import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App cat={5} txt="this is the prop text"/>,
document.getElementById('root'));


serviceWorker.unregister();
