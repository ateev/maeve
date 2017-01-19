import React from 'react';
import MaeveDropdown from 'maeve-dropdown';
import throttle from 'lodash/throttle';

class MaeveInput extends React.Component {

  constructor(props) {
    super(props);
    let defaultVal = props.value || '';
    this.state = {
      value: defaultVal,
      isFocus: false,
    };
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
    });
    this.setFocus(false);
  }

  onAddNewItem = () => {
    const valueId = this.props.multi === true ? this.props.valueId : this.props.id;
    this.props.autocomplete.addNewItem(this.state.value, valueId);
    this.setFocus(false);
  }

  setFocus = (isFocus) => {
    this.setState({
      isFocus: isFocus,
    });
  }

  render() {
    let inputProps = {
      id: this.props.id,
      type: 'text',
      value: this.state.value,
      placeholder: this.props.placeholder,
      onChange: throttle(this.handleChange, 10000),
      onFocus: this.setFocus.bind(null, true),
    };
    let dropdown = '';
    const autocomplete = this.props.autocomplete;
    if ( typeof autocomplete !== 'undefined' && this.state.isFocus === true ) {
      if (autocomplete.trigger === 0) {
        inputProps.onFocus = this.handleChange;
      }
      let dropdownProps = {
        items: autocomplete.source,
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
  id: React.PropTypes.string,
  onValueUpdate: React.PropTypes.func,
  valueId: React.PropTypes.string,
  multi: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  autocomplete: React.PropTypes.object,
  label: React.PropTypes.string,
};

export default MaeveInput;