import React from 'react';

import './app.scss';

import ITreeNode from '../tree/tree-node';
import testData from '../tree/test-data';

export default function App()
{
  return (
    <code>{ JSON.stringify(testData) }</code>
  );
}
