import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Saved from './pages/Saved'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
