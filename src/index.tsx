import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './app/app';

const mainElements = document.getElementsByTagName('main');
if (mainElements.length === 1)
{
    ReactDOM.render(<App />, mainElements[0]);
}
