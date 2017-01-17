import React from 'react';
import MaeveDropdown from 'maeve-dropdown';
import throttle from 'lodash/throttle';

class MaeveInput extends React.Component {

  constructor(props) {
    super(props);

    this.autocomplete = this.props.autocomplete;
    if ( typeof this.autocomplete !== 'undefined' ) {
      try{
        this.addNewItem = this.autocomplete.options.addNewItem;
      } catch(e) {
        this.addNewItem = undefined;
      }
      try{
        this.autoCompleteTrigger = this.autocomplete.options.trigger - 1;
      } catch(e){
        this.autoCompleteTrigger = 0;
      }
    }

    let defaultVal = props.value || '';
    if(props.multi === true) {
      defaultVal = '';
    }
    this.state = {
      value: defaultVal,
      autocompleteSuggestions: null,
    };
  }

  filterResults = (item, query) => {
    if (this.autoCompleteTrigger === 0) {
      return item;
    } else {
      return item.toLowerCase().includes(query.toLowerCase())
    }
  }

  updateValue = (newState) => {
    const valueId = this.props.multi === true ? this.props.valueId : this.props.id;
    this.props.onValueUpdate(newState.value, valueId);
    this.setState(newState);
  }

  handleChange = (event) => {
    let updatedValue = event.target.value;
    let updatedAutocompleteSuggestions = [];

    if (
      typeof this.autocomplete !== 'undefined' &&
      updatedValue.length > this.autoCompleteTrigger
    ) {
      updatedAutocompleteSuggestions = this.state.autocompleteSuggestions;
      const source = this.autocomplete.source;
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

  onAddNewItem = () => {
    const valueId = this.props.multi === true ? this.props.valueId : this.props.id;
    this.autocomplete.options.addNewItem(this.state.value, valueId);
    this.clearAutocomplete();
  }

  clearAutocomplete = (event) => {
    this.setState({
      autocompleteSuggestions: null,
    });
  }

  render() {
    let inputProps = {
      id: this.props.id,
      type: 'text',
      value: this.state.value,
      placeholder: this.props.placeholder,
      onChange: throttle(this.handleChange, 10000),
    };
    if (this.autoCompleteTrigger === 0) {
      inputProps.onFocus = this.handleChange;
    }

    let dropdownProps = {
      items: this.state.autocompleteSuggestions,
      onSelect: this.onItemSelect,
    }

    if( typeof this.addNewItem !== 'undefined' ) {
      dropdownProps.addNewItem = this.onAddNewItem;
    }

    return (
      <div className="maeve-input">
        { typeof this.props.label !== undefined ?
          <label htmlFor={this.props.id}>{this.props.label}</label>
          :
          ''
        }
        <input
          {...inputProps}
        />
        { typeof this.props.autocomplete !== 'undefined' ?
        <MaeveDropdown
          {...dropdownProps}
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
  multi: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  autocomplete: React.PropTypes.object,
  label: React.PropTypes.string,
};

export default MaeveInput;