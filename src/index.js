import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickyApp from './ClickyApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ClickyApp />, document.getElementById('root'));
registerServiceWorker();
