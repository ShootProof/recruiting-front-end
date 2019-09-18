import React from 'react';

import './App.scss';
import * as testData from './testdata.json';

function App() {
  return (
    <header>
      <p>JSON data</p>
      <code>{ JSON.stringify(testData) }</code>
    </header>
  );
}

export default App;
