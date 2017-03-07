import React from 'react';

class MaeveDropdown extends React.Component {
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
        dropdownItems.push(
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
          {
            this.props.isSourceHtml === true ? <div dangerouslySetInnerHTML={{ __html: value }} />
              : value
          }
        </li>
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
      <div className="maeve-dropdown">
        <ul>
          { this.getDropdownItems(items) }
        </ul>
      </div>
    );
  }
};

MaeveDropdown.PropTypes = {
  items: React.PropTypes.isRequired,
  onSelect: React.PropTypes.func.isRequired,
  addNewItem: React.PropTypes.func.isRequired,
}

export default MaeveDropdown;