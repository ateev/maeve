import React from 'react';
import MaeveDropdown from 'maeve-dropdown';
import throttle from 'lodash/throttle';

class MaeveInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      autocompleteSuggestions: null,
    };
  }

  filterResults = (item, query) => item.toLowerCase().includes(query.toLowerCase())

  updateValue = (newState) => {
    const valueId = this.props.multi === true ? this.props.valueId : this.props.id;
    this.props.onValueUpdate(newState.value, valueId);
    this.setState(newState);
  }

  handleChange = (event) => {
    let updatedValue = event.target.value;
    let updatedAutocompleteSuggestions = [];

    if ( typeof this.props.autocomplete !== 'undefined' && updatedValue.length > 2 ) {
      updatedAutocompleteSuggestions = this.state.autocompleteSuggestions;
      const source = this.props.autocomplete.source;
      if ( source instanceof Array ) {
        updatedAutocompleteSuggestions = source
          .filter(
            item => this.filterResults(item, updatedValue)
          );
      } else if ( typeof source === 'function' ) {
        updatedAutocompleteSuggestions = source(updatedValue);
      }
    } else {
      updatedAutocompleteSuggestions = null;
    }
    this.updateValue({
      value: updatedValue,
      autocompleteSuggestions: updatedAutocompleteSuggestions,
    });
  }

  onItemSelect = (value) => {
    this.updateValue({
      value,
      autocompleteSuggestions: null,
    });
  }

  addNewItem = () => {
    const valueId = this.props.multi === true ? this.props.valueId : this.props.id;
    this.props.autocomplete.options.addNewItem(this.state.value, valueId);
    this.clearAutocomplete();
  }

  clearAutocomplete = (event) => {
    this.setState({
      autocompleteSuggestions: null,
    });
  }

  render() {
    let addNewItem;
    if (
      this.props.autocomplete !== undefined &&
      this.props.autocomplete.options !== undefined &&
      this.props.autocomplete.options.addNewItem !== undefined
    ) {
      addNewItem = this.props.autocomplete.options.addNewItem;
    } else {
      addNewItem = undefined;
    }

    return (
      <div className="maeve-input">
        { typeof this.props.label !== undefined ?
          <label htmlFor={this.props.id}>{this.props.label}</label>
          :
          ''
        }
        <input
          id={this.props.id}
          type="text"
          name="maeve-input"
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={throttle(this.handleChange, 10000)}
        />
        { typeof this.props.autocomplete !== 'undefined' ?
        <MaeveDropdown
          items={this.state.autocompleteSuggestions}
          addNewItem={this.addNewItem}
          onSelect={this.onItemSelect}
        />
        : ''
        }
      </div>
    );
  }
};

MaeveInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  onValueUpdate: React.PropTypes.func.isRequired,
  valueId: React.PropTypes.string,
  mult: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  autocomplete: React.PropTypes.object,
  label: React.PropTypes.string,
};

export default MaeveInput;