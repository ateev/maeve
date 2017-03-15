import React from 'react';
import MaeveDropdown from 'maeve-dropdown';
import debounce from 'lodash/debounce';
import { InputLabel, InputField } from './maeve-input-style.js';

class MaeveInput extends React.Component {

  constructor(props) {
    super(props);
    let defaultVal = props.value || '';
    this.state = {
      value: defaultVal,
      isFocus: false,
    };
    this.valueChangeCallback = debounce(this.valueChangeCallback, props.debounceTime || 20);
  }

  componentWillReceiveProps(newProps) {
    if (
          typeof newProps.value !== 'undefined' &&
          newProps.value !== this.state.value
       ) {
      this.setState({
        value: newProps.value,
      });
    }
  }

  handleChange = (event) => {
    this.updateValue({
      value: event.target.value,
    });
  }

  updateValue = (newState) => {
    this.valueChangeCallback(newState);
    this.setState(newState);
  }

  valueChangeCallback = (newState) => {
    const valueId = this.props.multi === true ? this.props.valueId : this.props.id;
    this.props.onValueUpdate(newState.value, valueId);
  }

  onItemSelect = (value, event) => {
    event.stopPropagation();
    this.updateValue({
      value,
    });
    this.setFocus(false);
  }

  onAddNewItem = () => {
    const valueId = this.props.multi === true ? this.props.valueId : this.props.id;
    this.props.autocomplete.addNewItem(this.state.value, valueId);
    this.setFocus(false);
  }

  setFocus = (isFocus) => {
    isFocus === true ?
      window.addEventListener('click', this.onPageClick, false) :
      window.removeEventListener('click', this.onPageClick, false);
    this.setState({
      isFocus: isFocus,
    });
  }

  onPageClick = (event) => {
    event.target.id !== this.props.id && this.setFocus(false);
  }

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
        source = autocomplete.source;
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
    const required = this.props.required || false;
    let inputProps = {
      id: this.props.id,
      type: 'text',
      value: this.state.value,
      placeholder: this.props.placeholder,
      onChange: this.handleChange,
      required,
      onFocus: this.setFocus.bind(null, true),
    };
    let dropdown = '';
    const autocomplete = this.props.autocomplete;
    if ( typeof autocomplete !== 'undefined' && this.state.isFocus === true ) {
      const trigger = autocomplete.trigger;
      if (trigger === 0) {
        inputProps.onFocus = this.handleChange;
      }
      dropdown = this.getDropdown();
    }
    return (
      <div className="maeve-input">
        { typeof this.props.label !== 'undefined' ?
          <InputLabel htmlFor={this.props.id}>{this.props.label}</InputLabel>
          :
          ''
        }
        <InputField
          {...inputProps}
        />
        {dropdown}
        {this.props.children}
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