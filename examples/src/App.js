import React, { Component } from 'react';
import MaeveInput from 'maeve-input';
import MaeveMulti from 'maeve-multi';
import './App.css';

class App extends Component {

  filterResults = (item, query) => item.toLowerCase().includes(query.toLowerCase())

  addNewItem = (value) => {
    console.log("adding new option " + value);
  }

  onValueUpdate = (value, id) => {
    console.log("Value updated to " + value);
    if( typeof id !== 'undefined') {
      console.log(id);
    }
  }

  asyncFunction = (value) => {
    return ["apple", "banana", "cat", "appollo", "caterpillar"]
    .filter(
      item => this.filterResults(item, value)
    );
  }

  render() {
    const autoComplete = {
      source: ["apple", "banana", "cat", "appollo", "caterpillar"],
      options: {
        addNewItem: this.addNewItem,
      }
    };
    return (
      <div className="App">
        <h2>Maeve-input</h2>
        <MaeveMulti>
          <MaeveInput
            // Essentials
            id="listAutocomplete"
            onValueUpdate={this.onValueUpdate}
            // Optionals
            placeholder="hello"
            autocomplete={autoComplete}
          />
        </MaeveMulti>
        <br />
        <div> <h2>Maeve-input with source as a function and a label</h2> </div>
        <MaeveInput
          // Essentials
          id="asyncAutoComplete"
          onValueUpdate={this.onValueUpdate}
          // Optionals
          autocomplete={{ source: this.asyncFunction }}
          label="Searchable Items"
        />
      </div>
    );
  }
}

export default App;
