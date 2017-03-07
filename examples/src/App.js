import React, { Component } from 'react';
import MaeveInput from 'maeve-input';
import MaeveMulti from 'maeve-multi';
import Code from 'react-embed-code';
import './App.css';

class App extends Component {

  filterResults = (item, query) => item.toLowerCase().includes(query.toLowerCase())

  addNewItem = (value) => {
    console.log("adding new option " + value);
  }

  onValueUpdate = (value, id) => {
    console.log(id + " Value updated to " + value);
  }

  onNewMultipleAdded = (id) => {
    console.log("added new component " + id);
  }

  onNewMultipleRemoved = (id) => {
    console.log("removed new component " + id);
  }

  asyncFunction = (value) => {
    const newArray =
    ["apple", "banana", "cat", "appollo", "caterpillar"]
    .filter(
      item => this.filterResults(item, value)
    );
    return newArray;
  }

  render() {
    const autoComplete = {
      source: ["apple", "banana", "cat", "appollo", "caterpillar"],
    };
    const autoCompleteWithAddNew = {
      source: ["apple", "banana", "cat", "appollo", "caterpillar"],
      trigger: 3,
      addNewItem: this.addNewItem,
    };
    const componentProps = [{
      valueId: 'autoFillMulti-1',
      value: 'default 1',
      autocomplete: autoCompleteWithAddNew,
      onValueUpdate: this.onValueUpdate,
    },{
      valueId: 'autoFillMulti-2',
      value: 'default 2',
      autocomplete: autoComplete,
      onValueUpdate: this.onValueUpdate,
    },{
      valueId: 'autoFillMulti-3',
      value: 'default 3',
      autocomplete: autoCompleteWithAddNew,
      onValueUpdate: this.onValueUpdate,
    },{
      valueId: 'autoFillMulti-4',
      value: 'default 4',
      autocomplete: autoCompleteWithAddNew,
      onValueUpdate: this.onValueUpdate,
    }];

    const example1 = `
      <MaeveInput
        id="listAutocomplete"
        onValueUpdate={this.onValueUpdate}
        debounceTime={0}
      />`;

    const example2 = `
      <MaeveInput
        // Essentials
        id="listAutocomplete"
        onValueUpdate={this.onValueUpdate}
        // Optionals
        autocomplete={autoComplete}
        placeholder="hello"
      />
    `;

    const example3 = `
      <MaeveMulti>
        <MaeveInput
          // Essentials
          id="listAutocomplete"
          onValueUpdate={this.onValueUpdate}
          // Optionals
          autocomplete={autoCompleteWithAddNew}
          placeholder="hello"
        />
      </MaeveMulti>
    `;

    const example4 = `
      <MaeveInput
        // Essentials
        id="asyncAutoComplete"
        onValueUpdate={this.onValueUpdate}
        // Optionals
        autocomplete={{ source: this.asyncFunction }}
        label="Searchable Items"
      />
    `;

    const example5 = `
      <MaeveMulti
        addCallback={this.onNewMultipleAdded}
        removeCallback={this.onNewMultipleRemoved}
        initWithZero={true}
      >
        <MaeveInput
          // Essentials
          id="listAutocomplete"
          onValueUpdate={this.onValueUpdate}
          // Optionals
          autocomplete={autoCompleteWithAddNew}
          placeholder="hello"
        />
      </MaeveMulti>
    `;

    const example6 = `
      <MaeveMulti
        addCallback={this.onNewMultipleAdded}
        removeCallback={this.onNewMultipleRemoved}
      >
        <MaeveInput
          // Essentials
          id="listAutocomplete"
          onValueUpdate={this.onValueUpdate}
          // Optionals
          autocomplete={autoCompleteWithAddNew}
          placeholder="hello"
        />
      </MaeveMulti>
    `;

    const example7 = `
      <MaeveMulti
        addCallback={this.onNewMultipleAdded}
        removeCallback={this.onNewMultipleRemoved}
        componentProps={componentProps}
      >
        <MaeveInput
          id='autoFillMulti'
          onValueUpdate={this.onValueUpdate}
        />
      </MaeveMulti>
    `;

    return (
      <div className="App">
        {/*Example 1*/}
        <section>
          <h2>Simple Maeve-input with bare essentials and debounce time.</h2>
          <Code embed={example1} />
          <MaeveInput
            // Essentials
            id="listAutocomplete"
            onValueUpdate={this.onValueUpdate}
            debounceTime={0}
          />
        </section>
        {/*Example 2*/}
        <section>
          <h2>Simple Maeve-input with a placeholder and autocomplete.</h2>
          <Code embed={example2} />
          <MaeveInput
            // Essentials
            id="listAutocomplete"
            onValueUpdate={this.onValueUpdate}
            // Optionals
            autocomplete={autoComplete}
            placeholder="hello"
          />
        </section>
        {/*Example 3*/}
        <section>
          <div> <h2>Maeve-input with a label and source as a function.</h2> </div>
          <Code embed={example4} />
          <MaeveInput
            // Essentials
            id="asyncAutoComplete"
            onValueUpdate={this.onValueUpdate}
            // Optionals
            autocomplete={{ source: this.asyncFunction }}
            label="Searchable Items"
          />
        </section>
        {/*Example 4*/}
        <section>
          <h2>Multi Maeve without any options. Input with autocomplete.</h2>
          <Code embed={example3} />
          <MaeveMulti
          >
            <MaeveInput
              // Essentials
              id="listAutocomplete"
              onValueUpdate={this.onValueUpdate}
              // Optionals
              autocomplete={autoCompleteWithAddNew}
              placeholder="hello"
            />
          </MaeveMulti>
        </section>
        {/*Example 5*/}
        <section>
          <h2>Multi-Maeve with callbacks and 0 inital elements. Maeve-Input with autocomplete.</h2>
          <Code embed={example5} />
          <MaeveMulti
            addCallback={this.onNewMultipleAdded}
            removeCallback={this.onNewMultipleRemoved}
            initWithZero={true}
          >
            <MaeveInput
              // Essentials
              id="listAutocomplete"
              onValueUpdate={this.onValueUpdate}
              // Optionals
              autocomplete={autoCompleteWithAddNew}
              placeholder="hello"
            />
          </MaeveMulti>
        </section>
        {/*Example 6*/}
        <section>
          <h2>Maeve-Multi. Maeve-input with autocomplete, trigger and add new callback.</h2>
          <Code embed={example6} />
          <MaeveMulti
            addCallback={this.onNewMultipleAdded}
            removeCallback={this.onNewMultipleRemoved}
          >
            <MaeveInput
              // Essentials
              id="listAutocomplete"
              onValueUpdate={this.onValueUpdate}
              // Optionals
              autocomplete={autoCompleteWithAddNew}
              placeholder="hello"
            />
          </MaeveMulti>
        </section>
        {/*Example 7*/}
        <section>
          <div> <h2>Multi with auto-filled values, array of inputs.</h2> </div>
          <Code embed={example7} />
          <MaeveMulti
            addCallback={this.onNewMultipleAdded}
            removeCallback={this.onNewMultipleRemoved}
            componentProps={componentProps}
          >
            <MaeveInput
              id='autoFillMulti'
              onValueUpdate={this.onValueUpdate}
            />
          </MaeveMulti>
        </section>
      </div>
    );
  }
}

export default App;
