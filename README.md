# Maeve [![Build Status](https://travis-ci.org/ateev/maeve.svg?branch=master)](https://travis-ci.org/ateev/maeve) [![Coverage Status](https://coveralls.io/repos/github/ateev/maeve/badge.svg?branch=master)](https://coveralls.io/github/ateev/maeve?branch=master)

Maeve is a react component library for building forms quickly.
There are 4 components that you can use in combination/inidvidually to make your forms awesome.

* MaeveInput
* MaeveMulti
* MaeveDropdown
* MaeveToggle

Feel free to send a request for any new components that you think might help you. :)


## Maeve Input

### Import
```
import MaeveInput from 'maeve/packages/maeve-input';
```

### Usage
Maeve Input requires "id" and input "type", Rest are optional.
```javascript
      <MaeveInput
        id="listAutocomplete" // specify a unique id for each input field.
        type="email"
        //Optionals
        onValueUpdate={this.onValueUpdate} // this function will be called on each value update.
        debounceTime={0} // You can specify a debunce time to get less frequent updates. default value is 20
      />
```

Other than these fields, you can always pass attributes for a input field
as specified in the [MDN docs for <input />](https://developer.mozilla.org/en/docs/Web/HTML/Element/input)

### With Autocomplete

Autocomplete settings object
```javascript
  const autoComplete = {
    source: ["apple", "banana", "cat", "appollo", "caterpillar"],
    // source can be an array of items to search from.
    // or it can be a function that returns an array.
    trigger: 3,
    // optional. Defaults to 0
    // number of minimum letters in input after which trigger the autocomplete
    addNewItem: this.addNewItem,
    // An Optional key required if you want to create a add new button in the dropdown. The value is a callback function
  };
```

```javascript
  <MaeveInput
    // Essentials
    id="listAutocomplete"
    onValueUpdate={this.onValueUpdate}
    // Optionals
    autocomplete={autoComplete} // autocomplete options
    placeholder="hello" // A simple placeholder is supported
  />
```
