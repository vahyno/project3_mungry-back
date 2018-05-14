import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Recipes from './components/Recipes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
            <div className="nav-wrapper">
              <p className="brand-logo">Hungry Mungry's Recipe Book</p>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to ="/" >Home</Link></li>
                <li><a href="./new_post.html">Create Recipe</a></li>
              </ul>
            </div>
        </nav>


        <h1>Hello World! App.js</h1>

        <Switch>
          <Route path="/" exact component={Recipes} />
        </Switch>


      </div>
    );
  }
}

export default App;
