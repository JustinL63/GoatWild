import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormComponent from "./FormComponent"


function App() {
  return(
    
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <h1>Goat Wild's Garage</h1>
              </header>
              <FormComponent />
  
          
        </div>

  )
  
  
}

export default App;
