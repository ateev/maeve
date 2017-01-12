import React, { Component } from 'react';
import MaeveInput from 'maeve-input';
import MaeveMulti from 'maeve-multi';
import './App.css';

class App extends Component {
  filterResults = (item, query) => item.toLowerCase().includes(query.toLowerCase())

  asyncFunction = (value) => {
    return ["apple", "banana", "cat", "appollo", "caterpillar"]
    .filter(
      item => this.filterResults(item, value)
    );
  }

  render() {
    const autoComplete = {
      source: ["apple", "banana", "cat", "appollo", "caterpillar"],
    };
    return (
      <div className="App">
        <h2>maeve-input</h2>
        <MaeveMulti>
          <MaeveInput autocomplete={autoComplete} placeholder="hello" />
        </MaeveMulti>
        <br />
        <div> <h2>maeve-input with source as a function</h2> </div>
        <MaeveMulti>
          <MaeveInput autocomplete={{ source: this.asyncFunction }} />
        </MaeveMulti>
      </div>
    );
  }
}

export default App;
