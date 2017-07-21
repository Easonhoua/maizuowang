import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './alljs/hotcss.js'
import { Provider } from 'react-redux';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
