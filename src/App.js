import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TickBox from './components/tickbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hi there Jaakko</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TickBox></TickBox>
      </div>
    );
  }
}

export default App;
