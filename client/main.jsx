import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';

const node = document.createElement('div');
node.id = "app";
document.body.appendChild(node);

ReactDOM.render(<App />, node);
