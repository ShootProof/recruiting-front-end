import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './app/app';

const appElement = document.getElementById('app');
if (appElement)
{
    ReactDOM.render(<App />, appElement);
}
