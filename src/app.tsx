import React from 'react';
import List from './components/list/list';
import data from './shootproof_data.json';
import parseDataToList from "./data/parse_data_to_list";

const App = () => {
  return (
    <List items={parseDataToList(data)} />
  );
}

export default App;
