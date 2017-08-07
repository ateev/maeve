import React from 'react';
import { MaeveDropdownList, MaeveDropdownListItem, MaeveDropDown } from './maeve-dropdown-style.js';

class MaeveDropdown extends React.Component {
  constructor(props){
    super(props);
  }

  getDropdownItems = (items) => {
    let dropdownItems = [];
    if( items instanceof Array ) {
      if (items.length === 0) {
        dropdownItems.push(
          <MaeveDropdownListItem>
            No result
          </MaeveDropdownListItem>
        );
      }
      dropdownItems = items.map((value, key) => (
        <MaeveDropdownListItem
          className="dropdown-item"
          key={key}
          onClick={(event) => this.props.onSelect(value, event)}
        >
          { value }
        </MaeveDropdownListItem>
      ));
    }
    if (items !== null && this.props.addNewItem !== undefined) {
      dropdownItems.push(
        <li
          style={dropdownItemStyle}
          className="dropdown-item"
          key={dropdownItems.length + 1}
          onClick={this.props.addNewItem}
        >
        Add New +
        </li>
      )
    }
    return dropdownItems;
  }
  render() {
    const items = this.props.items;
    return (
      <MaeveDropDown>
        <MaeveDropdownList>
          { this.getDropdownItems(items) }
        </MaeveDropdownList>
      </MaeveDropDown>
    );
  }
};

MaeveDropdown.PropTypes = {
  items: React.PropTypes.isRequired,
  onSelect: React.PropTypes.func.isRequired,
  addNewItem: React.PropTypes.func.isRequired,
}

export default MaeveDropdown;
