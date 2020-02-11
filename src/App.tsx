import React from 'react';
import './App.css';
import TreeNav from './TreeNav/TreeNav';
import jsonData from './testdata.json';

const App = () => {
  return (
    <div className="App">
      <TreeNav data={JSON.stringify(jsonData)}/>
    </div>
  );
}

export default App;
