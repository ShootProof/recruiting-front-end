import React from 'react';

import './app.scss';
import * as testData from './testdata.json';

function App() {
  return (
    <article>
      <header>
        <p>JSON data</p>
      </header>
      <code>{ JSON.stringify(testData) }</code>
      <footer>

      </footer>
    </article>
  );
}

export default App;
