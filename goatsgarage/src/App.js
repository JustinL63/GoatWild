import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './Customer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h1>Goat Wild's Garage</h1>
            <Customer />

        </header>
      </div>
    );
  }
}

export default App;
