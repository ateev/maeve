import React from 'react';
import {
  OnOffSwitch,
  OnOffSwitchCheckBox,
  OnOffswitchLabel,
  OnOffswitchInner,
  OnOffswitchSwitch,
  ToggleLabel,
} from './maeve-toggle-style.js';

export default class MaeveToggle extends React.Component {
  render() {
    let inputProps = {
      type: "checkbox",
      name: this.props.id,
      className: "onoffswitch-checkbox",
      onChange: event => this.props.onValueUpdate(event.target.checked, this.props.id),
    }
    inputProps = Object.assign({}, inputProps, this.props);
    const FinalComponent = React.createElement(OnOffSwitchCheckBox, inputProps);
    return (
      <div className="maeve-toggle">
        { typeof this.props.label !== undefined ?
          <ToggleLabel>{ this.props.label }</ToggleLabel>
          :
          ''
        }
        <OnOffSwitch>
          { FinalComponent }
          <OnOffswitchLabel className="onoffswitch-label" htmlFor={this.props.id}>
            <OnOffswitchInner className="onoffswitch-inner" />
            <OnOffswitchSwitch className="onoffswitch-switch" />
          </OnOffswitchLabel>
        </OnOffSwitch>
      </div>
    );
  }
};
