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

  onNewMultipleAdded = (id) => {
    console.log("added new component " + id);
  }

  onNewMultipleRemoved = (id) => {
    console.log("removed new component " + id);
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
    };
    const autoCompleteWithAddNew = {
      source: ["apple", "banana", "cat", "appollo", "caterpillar"],
      options: {
        trigger: 3,
        addNewItem: this.addNewItem,
      }
    };
    return (
      <div className="App">
        <section>
          <h2>Simple Maeve-input</h2>
          <code>
              // Essentials
              id="simpleMaeveInput"
              onValueUpdate={this.onValueUpdate}
              // Optionals
              placeholder="hello"
          </code>
          <MaeveInput
            // Essentials
            id="listAutocomplete"
            onValueUpdate={this.onValueUpdate}
            // Optionals
            placeholder="hello"
            autocomplete={autoComplete}
          />
        </section>
        <section>
          <h2>Simple Maeve-input with default value and autocomplete.</h2>
          <code>
              // Essentials
              id="listAutocomplete"
              onValueUpdate={this.onValueUpdate}
              // Optionals
              value="default values be like"
              placeholder="hello"
          </code>
          <MaeveInput
            // Essentials
            id="listAutocomplete"
            onValueUpdate={this.onValueUpdate}
            // Optionals
            autocomplete={autoComplete}
            value="default values be like"
            placeholder="hello"
          />
        </section>
        <section>
          <h2>Maeve-input with autocomplete</h2>
          <code>
              // Essentials
              id="listAutocomplete"
              onValueUpdate={this.onValueUpdate}
              // Optionals
              placeholder="hello"
          </code>
          <MaeveMulti
            addCallback={this.onNewMultipleAdded}
            removeCallback={this.onNewMultipleRemoved}
          >
            <MaeveInput
              // Essentials
              id="listAutocomplete"
              onValueUpdate={this.onValueUpdate}
              // Optionals
              autocomplete={autoComplete}
              placeholder="hello"
            />
          </MaeveMulti>
        </section>
        <section>
          <div> <h2>Maeve-input with source as a function and a label</h2> </div>
          <MaeveInput
            // Essentials
            id="asyncAutoComplete"
            onValueUpdate={this.onValueUpdate}
            // Optionals
            autocomplete={{ source: this.asyncFunction }}
            label="Searchable Items"
          />
        </section>
      </div>
    );
  }
}

export default App;
