import React from 'react';

export default class MaeveDropdown extends React.Component {
  constructor(props){
    super(props);
  }
  getDropdownItems = (items) => {
    const dropdownItemStyle = {
      'padding': '7px',
      'border': '1px solid #ececec',
      'borderTop': '0px',
      'cursor': 'pointer',
    };
    let dropdownItems = [];
    if( items instanceof Array ) {
      if (items.length === 0) {
        return (
          <li>
            No result
          </li>
        );
      }
      dropdownItems = items.map((value, key) => (
        <li
          style={dropdownItemStyle}
          className="dropdown-item"
          key={key}
          onClick={this.props.onSelect.bind(null, value)}
        >
          { value }
        </li>
      ));
    }
    if (this.props.addNewItem !== undefined) {
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
      <div className="maeve-dropdown">
        <ul>
          { this.getDropdownItems(items) }
        </ul>
      </div>
    );
  }
};