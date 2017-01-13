import React from 'react';
import MaeveDropdown from 'maeve-dropdown';

export default class MaeveInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      autocompleteSuggestions: [],
    };
  }

  filterResults = (item, query) => item.toLowerCase().includes(query.toLowerCase())

  handleChange = (event) => {
    let updatedValue = event.target.value;
    let updatedAutocompleteSuggestions = this.state.autocompleteSuggestions;
    const source = this.props.autocomplete.source;

    if ( typeof source !== undefined && updatedValue.length > 2 ) {
      if ( source instanceof Array ) {
        updatedAutocompleteSuggestions = source
          .filter(
            item => this.filterResults(item, updatedValue)
          );
      } else if ( typeof source === 'function' ) {
        updatedAutocompleteSuggestions = source(updatedValue);
      }
    } else {
      updatedAutocompleteSuggestions = [];
    }
    this.setState({
      value: updatedValue,
      autocompleteSuggestions: updatedAutocompleteSuggestions,
    });
  }

  onItemSelect = (value) => {
    this.setState({
      value,
      autocompleteSuggestions: [],
    });
  }

  render() {
    const inputField = (
      <input
        id={this.props.id}
        type="text"
        name="maeve-input"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
    return (
      <div className="maeve-input">
        { typeof this.props.label !== undefined ?
          <label>{this.props.label}
            {inputField}
          </label>
          :
          {inputField}
        }
        <MaeveDropdown
          items={this.state.autocompleteSuggestions}
          options={this.props.autocomplete.options}
          onSelect={this.onItemSelect}
        />
      </div>
    );
  }
};