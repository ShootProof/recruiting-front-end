import React from 'react';

import AppState from './App.state';
import './App.css';

class AppContainer extends React.Component {
  state = AppState;

  componentDidMount() {
    this.transformNavJSON();
  }

  transformNavJSON = () => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
};

export default AppContainer;
