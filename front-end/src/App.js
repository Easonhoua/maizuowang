import React, { Component } from 'react';
import { HashRouter as Router,  Route  } from 'react-router-dom';
import './css/reset.css';
import Header from './components/header.js';
import Fliter from "./components/fliter.js";
import TotalList from './components/totallist.js';
import Cinemas from './components/cinemas.js';
import Home from './components/home.js';
import Login from './components/login.js';
import Loginmain from './components/loginmain'

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Header/>
              <Route exact={true} path="/" component={ Home } />
              <Route path="/totallist" component={ TotalList } />
              <Route path="/cinemas" component={ Cinemas } />
              <Route exact={false} path="/filter" component={ Fliter }/>
              <Route path='/login' component={ Login }/>
              <Route path='/loginmain' component={ Loginmain }/>
          </div>
      </Router>
    );
  }
}




export default App;
