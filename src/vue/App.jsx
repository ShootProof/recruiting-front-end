import Vue from 'vue'
import { NodeTree } from './NodeTree'
import data from './../../testdata.json'

new Vue({
  el: '#vue-app',
  render() {
    return (
      <div id="vue-app">
        <div class="App">
          <h2>Vue App</h2>
          <NodeTree testdata={data} />
        </div>
      </div>
    )
  },
})
