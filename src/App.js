import React from 'react';
import './App.css';
import Expander from './components/Expander.js';
const data = require('./testdata.json');

// this recursively finds all children of a given node
// while gathering this information, all children are put 
// into a child array on the node and sets a default visibility flag
const findChildren = (item) => {
  return data.reduce((total, currentItem) => {
    if(item.id === currentItem.parent){
      if(currentItem.parent !== null){
        currentItem.children = findChildren(currentItem);
        currentItem.childrenVisible = true;
      }
      total.push(currentItem)
    }
    return total;
  }, []);
}

function App() {
  // start by grabbing only top level nodes, and find their children recursively
  const formattedData = data.reduce((total, currentItem) => {
    if(currentItem.parent === null){
      currentItem.children = findChildren(currentItem);
      currentItem.childrenVisible = true;
      total.push(currentItem);
    }
    return total;
  }, []);

  return (
    <div className="App">
      {
        formattedData.map(item => {
          return <Expander key={`${item.id}_top`} data={[item]} level={0} />
        })
      }
    </div>
  );
}

export default App;
