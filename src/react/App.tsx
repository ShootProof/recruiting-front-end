import React from 'react'
import { render } from 'react-dom'
import data from './../../testdata.json'
import { NodeTree } from './NodeTree'

render(
  <div className="App">
    <h2>React App</h2>
    <NodeTree data={data} />
  </div>,
  document.getElementById('react-app')
)
