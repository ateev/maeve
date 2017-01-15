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

  addNewItem = (value) => {
    console.log("adding new option" + value);
  }

  onValueUpdate = (value) => {
    console.log("Value updated");
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
        <MaeveInput
          // Essentials
          id="listAutocomplete"
          onValueUpdate={this.onValueUpdate}
          // Optionals
          placeholder="hello"
          multiple={true}
          autocomplete={autoComplete}
        />
        <br />
        <div> <h2>Maeve-input with source as a function and a label</h2> </div>
        <MaeveMulti>
          <MaeveInput
            // Essentials
            id="asyncAutoComplete"
            onValueUpdate={this.onValueUpdate}
            // Optionals
            autocomplete={{ source: this.asyncFunction }}
            label="Searchable Items"
          />
        </MaeveMulti>
      </div>
    );
  }
}

export default App;
