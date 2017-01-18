import React from 'react';
import MaeveDropdown from 'maeve-dropdown';
import throttle from 'lodash/throttle';

class MaeveInput extends React.Component {

  constructor(props) {
    super(props);
    let defaultVal = props.value || '';
    if(props.multi === true) {
      defaultVal = '';
    }
    this.state = {
      value: defaultVal,
    };
    if ( typeof props.autocomplete !== 'undefined' ) {
      this.state.autocompleteSuggestions = props.autocomplete.source || null;
    }
  }

  componentWillReceiveProps = (newProps) => {
    if ( typeof newProps.autocomplete !== 'undefined' ) {
      const newSuggestions = newProps.autocomplete.source;
      const oldSuggestions = this.props.autocomplete.source;
      if (
            newSuggestions.length !== oldSuggestions.length ||
            newSuggestions.every((v,i)=> v !== oldSuggestions[i])
        ) {
        this.setState({
          autocompleteSuggestions: newProps.autocomplete.source,
        });
      }
    }
  }

  handleChange = (event) => {
    this.updateValue({
      value: event.target.value,
    });
  }

  updateValue = (newState) => {
    const valueId = this.props.multi === true ? this.props.valueId : this.props.id;
    this.props.onValueUpdate(newState.value, valueId);
    this.setState(newState);
  }

  onItemSelect = (value) => {
    this.updateValue({
      value,
      autocompleteSuggestions: null,
    });
  }

  onAddNewItem = () => {
    const valueId = this.props.multi === true ? this.props.valueId : this.props.id;
    this.autocomplete.addNewItem(this.state.value, valueId);
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
      onFocus: show
    };

    let dropdown = '';

    const autocomplete = this.props.autocomplete;
    if ( typeof autocomplete !== 'undefined' ) {
      if (autocomplete.trigger === 0) {
        inputProps.onFocus = this.handleChange;
      }
      let dropdownProps = {
        items: this.state.autocompleteSuggestions,
        onSelect: this.onItemSelect,
      }
      if( typeof autocomplete.addNewItem !== 'undefined' ) {
        dropdownProps.addNewItem = this.onAddNewItem;
      }
      dropdown = <MaeveDropdown {...dropdownProps}/>
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
        {dropdown}
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