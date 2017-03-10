import React from 'react';

export default class MaeveToggle extends React.Component {
  render() {
    return (
      <div className="maeve-toggle">
        { typeof this.props.label !== undefined ?
          <div className="toggle-label">{ this.props.label }</div>
          :
          ''
        }
        <div className="onoffswitch">
          <input
            type="checkbox"
            name={this.props.id}
            className="onoffswitch-checkbox"
            id={this.props.id}
            defaultChecked
            onChange={event => this.props.onValueUpdate(event.target.checked, this.props.id)}
          />
          <label className="onoffswitch-label" htmlFor={this.props.id}>
            <span className="onoffswitch-inner" />
            <span className="onoffswitch-switch" />
          </label>
        </div>
      </div>
    );
  }
};