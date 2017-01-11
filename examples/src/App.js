import React, { Component } from 'react';
import MaeveInput from 'maeve-input';
import MaeveMulti from 'maeve-multi';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>maeve-input</h2>
        <MaeveMulti>
          <MaeveInput />
        </MaeveMulti>
      </div>
    );
  }
}

export default App;
