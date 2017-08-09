import React from 'react';
import MaeveDropdown from 'maeve/packages/maeve-dropdown';
import debounce from 'lodash/debounce';
import { InputLabel, InputField, ErrorMessage, TextAreaField } from './maeve-input-style.js';

class MaeveInput extends React.Component {

  constructor(props) {
    super(props);

    // Setting default value to empty string if no val provided.
    this.state = {
      value: (props.value || ''),
      isFocus: false,
    };

    // Calling the value change callblack with 20ms debounce
    this.valueChangeCallback = debounce(this.valueChangeCallback, props.debounceTime || 20);
  }

  componentWillReceiveProps(newProps) {
    // Updating the value only if different from the currect value.
    if (typeof newProps.value !== 'undefined' && newProps.value !== this.state.value) {
      this.setState({
        value: newProps.value,
      });
    }
  }

  // Triggers whenever input field value changes
  handleChange = (event) => {
    this.updateValue({
      value: event.target.value,
    });
  }

  // Updates the state and calls the callback function with updated value
  updateValue = (newState) => {
    this.valueChangeCallback(newState);
    this.setState(newState);
  }

  valueChangeCallback = (newState) => {
    if (typeof this.props.onValueUpdate !== 'undefined') {
      const valueId = this.props.multi === true ? this.props.valueId : this.props.id;
      this.props.onValueUpdate(newState.value, valueId);
    }
  }

  // If the input type is dropdown, this gets triggered when an item is selected.
  onItemSelect = (value, event) => {
    event.stopPropagation();
    this.updateValue({
      value,
    });
    this.setFocus(false);
  }

  // In case of dropdown, if there is a button in bottom to add new item,
  // this function executes the callback
  onAddNewItem = () => {
    const valueId = this.props.multi === true ? this.props.valueId : this.props.id;
    this.props.autocomplete.addNewItem(this.state.value, valueId);
    this.setFocus(false);
  }

  // To Show/Hide the dropdown menu
  setFocus = (isFocus) => {
    isFocus === true ?
      window.addEventListener('click', this.onPageClick, false) :
      window.removeEventListener('click', this.onPageClick, false);
    this.setState({
      isFocus: isFocus,
    });
  }

  // To close the dropdown, if open
  onPageClick = (event) => {
    event.target.id !== this.props.id && this.setFocus(false);
  }

  // If dropdown menu is there, render using the maeve-dropdown
  getDropdown() {
    let dropdown = '';
    const autocomplete = this.props.autocomplete;
    if (
      typeof autocomplete !== 'undefined' &&
      this.state.isFocus === true &&
      (
        typeof autocomplete.trigger === 'undefined' ||
        autocomplete.trigger <= this.state.value.length
      )
    ) {
      let source;
      if ( typeof autocomplete.source === 'object' ) {
        source = autocomplete.source
      } else if ( typeof autocomplete.source === 'function' ) {
        source = autocomplete.source(this.state.value);
      }
      let dropdownProps = {
        items: source,
        onSelect: this.onItemSelect,
      }
      if( typeof autocomplete.addNewItem !== 'undefined' ) {
        dropdownProps.addNewItem = this.onAddNewItem;
      }
      dropdown = <MaeveDropdown {...dropdownProps}/>
    }
    return dropdown;
  }

  render() {
    // Setting the input props attributes set up by maeve.
    let inputProps = {
      value: this.state.value,
      onChange: this.handleChange,
      onFocus: this.setFocus.bind(null, true),
    };

    // In case dropdown is required for the input field.
    let dropdown = '';
    const autocomplete = this.props.autocomplete;
    if ( typeof autocomplete !== 'undefined' && this.state.isFocus === true ) {
      const trigger = autocomplete.trigger;
      if (trigger === 0) {
        inputProps.onFocus = this.handleChange;
      }
      dropdown = this.getDropdown();
    }

    // If error is passed in the props, show this error message
    const errorMessage = typeof this.props.error !== 'undefined' ?
      <ErrorMessage className="error">{this.props.error.message}</ErrorMessage> : null;

    // Merging the props with the new attributes for input field.
    inputProps = Object.assign({}, inputProps, this.props);

    // If Label text passed, render a label.
    const label = typeof this.props.label !== 'undefined' ?
      <InputLabel htmlFor={this.props.id}>{this.props.label}</InputLabel> : null;

    let Input
    console.log(this.props.type);
    if (this.props.type === 'textarea') {
      Input = TextAreaField;
    } else {
      Input = InputField;
    }
    // Creating the final component
    const FinalComponent = React.createElement(Input, inputProps);
    return (
      <div className="maeve-input">
        { label }
        { errorMessage }
        { FinalComponent }
        { dropdown }
        { this.props.children }
      </div>
    );
  }
};

MaeveInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  valueId: React.PropTypes.string,
  multi: React.PropTypes.bool,
  autocomplete: React.PropTypes.object,
  label: React.PropTypes.string,
  error: React.PropTypes.object,
};

export default MaeveInput;
