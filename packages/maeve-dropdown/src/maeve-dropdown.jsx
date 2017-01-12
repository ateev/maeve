import React from 'react';

export default class MaeveDropdown extends React.Component {
  constructor(props){
    super(props);
  }
  getDropdownItems = (items) => {
    let dropdownItems;
    const dropdownItemStyle = {
      'padding': '7px',
      'border': '1px solid #ececec',
      'borderTop': '0px',
      'cursor': 'pointer',
    };
    if( items instanceof Array ) {
      dropdownItems = items.map((value, key) => (
        <div
          style={dropdownItemStyle}
          className="dropdown-item"
          key={key}
          onClick={this.props.onSelect.bind(null, value)}
        >
          { value }
        </div>
      ));
    }
    return dropdownItems;
  }
  render() {
    const items = this.props.items;
    return (
      <div className="maeve-dropdown">
        { this.getDropdownItems(items) }
      </div>
    );
  }
};