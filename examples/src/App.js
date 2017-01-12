import React, { Component } from 'react';
import MaeveInput from 'maeve-input';
import MaeveMulti from 'maeve-multi';
import './App.css';

class App extends Component {
  render() {
    const autoComplete = {
      source: ["apple", "banana", "cat", "appollo", "caterpillar"],
    };
    return (
      <div className="App">
        <h2>maeve-input</h2>
        <MaeveMulti>
          <MaeveInput autocomplete={autoComplete} />
        </MaeveMulti>
      </div>
    );
  }
}

export default App;
