import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import mock from '../mock/mock';

require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
