import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import './index.scss';

const appElement = document.getElementById('app');
if (appElement)
{
    ReactDOM.render(<App />, appElement);
}
