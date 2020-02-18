import React from 'react';
import Header from './components/Header/Header';
import Home from './routes/Home/Home';
import AboutMe from './routes/AboutMe/AboutMe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.appContainer}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about-me">
            <AboutMe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
