import React from 'react';

export default class MaeveToggle extends React.Component {
  render() {
    return (
      <div className="maeve-toggle">
        { typeof this.props.label !== undefined ?
          <label>{this.props.label}</label>
          :
          ''
        }
        <input
          id={this.props.id}
          name={this.props.id}
          className="toggle-input"
          type="checkbox"
        />
        <label htmlFor={this.props.id}>
          <span className="label-inner" />
          <span className="label-switch" />
        </label>
      </div>
    );
  }
};