import React from 'react';

import './app.scss';

import ITreeNode from '../tree/tree-node';
import testData from '../tree/test-data';

export default function App()
{
  return (
    <article>
      <header>
        <h1>ShootProof - Recruiting Front-End Tree Control</h1>
      </header>
      <code>{ JSON.stringify(testData) }</code>
      <footer>
        <small>implemented by Adam R Moss</small>
      </footer>
    </article>
  );
}
