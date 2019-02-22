import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Posts from './component/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/post" component={Posts} />
      </div>
    );
  }
}

export default App;
