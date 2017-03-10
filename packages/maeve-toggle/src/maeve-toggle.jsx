import React from 'react';

export default class MaeveToggle extends React.Component {
  render() {
    return (
      <div className="maeve-toggle">
        <input
          id={this.props.id}
          className="toggle-input"
          type="checkbox"
        />
        <label for={this.props.id}>
          <span className="label-inner" />
          <span className="label-switch" />
        </label>
      </div>
    );
  }
};