import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Home';
import History from './History';
import './App.css';

class App extends Component {
  render() {
    return (
     <Router>
     <div>
     <ul className = "menu">
     <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
     <li><NavLink to="/History" activeClassName="selected">Notre Histoire</NavLink></li>
     </ul>
     
      <switch>
          <Route exact path="/" component={Home}/>
          <Route path="/History" component={History}/>
      </switch>
      </div>
     </Router>
    );
  }
}

export default App;
