import React from 'react';
import './App.css';
import Expander from './components/expander.js';
const data = require('./testdata.json');

const findChildren = (item) => {
  // console.log('finding children of: ', item.id);
  return data.reduce((total, currentItem) => {
    // console.log(`${item.id} - ${currentItem.parent}`);
    if(item.id === currentItem.parent){
      // console.log('child: ', currentItem);
      if(currentItem.parent !== null){
        // console.log('finding children of child: ', currentItem.id);
        currentItem.children = findChildren(currentItem);
        currentItem.childrenVisible = true;
      }
      total.push(currentItem)
    }
    return total;
  }, []);
}

function App() {
  // console.log('data: ', data);
  const formattedData = data.reduce((total, currentItem) => {
    if(currentItem.parent === null){
      currentItem.children = findChildren(currentItem);
      currentItem.childrenVisible = true;
      total.push(currentItem);
    }
    return total;
  }, []);

  // console.log('formattedData: ', formattedData);

  const renderMe = () => {
    return formattedData.map(item => {
      return <Expander key={`${item.id}_top`} data={[item]} level={0} />
    })
  }
  return (
    <div className="App">
      {renderMe()}
    </div>
  );
}

export default App;
