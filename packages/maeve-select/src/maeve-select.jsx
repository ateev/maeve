import React from 'react';
import { InputLabel, InputSelect, ErrorMessage } from './maeve-select-style.js';

class MaeveSelect extends React.Component {

  constructor(props) {
    super(props);
    // Setting default value to empty string if no val provided.
    this.state = {
      value: (props.value || ''),
      isFocus: false,
    };
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

  render() {
    // Setting the input props attributes set up by maeve.
    let inputProps = {
      value: this.state.value,
      onChange: this.handleChange,
      onFocus: this.setFocus.bind(null, true),
    };

    // If error is passed in the props, show this error message
    const errorMessage = typeof this.props.error !== 'undefined' ?
      <ErrorMessage className="error">{this.props.error.message}</ErrorMessage> : null;

    // Merging the props with the new attributes for input field.
    inputProps = Object.assign({}, inputProps, this.props);

    // If Label text passed, render a label.
    const label = typeof this.props.label !== 'undefined' ?
      <InputLabel htmlFor={this.props.id}>{this.props.label}</InputLabel> : null;

    // Creating the final component
    const FinalComponent = (
      <InputSelect {...inputProps}>
        {
          this.props.options.map(item => (
            <option value={item}>
              {item}
            </option>
          ))
        }
      </InputSelect>
    );
    return (
      <div className="maeve-select">
        { label }
        { errorMessage }
        { FinalComponent }
      </div>
    );
  }
};

MaeveSelect.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  options: React.PropTypes.array.isRequired,
  error: React.PropTypes.object,
};

export default MaeveSelect;
