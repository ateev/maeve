import React from 'react';
import PropTypes from 'prop-types';
import { MaeveMultiStyle, MaeveMultiItem, AddRemoveButton, ChildComponent } from './maeve-multi-style';

class MaeveMulti extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      childComponents: [],
      componentsCounter: 0,
    };
  }

  componentDidMount() {
    this.addInitialComponents(this.props);
  }

  addInitialComponents = (props) => {
    if(typeof props.componentProps !== 'undefined') {
      const newComponents = props.componentProps.map((props, key) => this.getNewComponent(props));
      const newCounter = Math.max(newComponents.length, this.state.componentsCounter);
      this.setState({
        childComponents: newComponents,
        componentsCounter: newCounter,
      });
    } else if (props.initWithZero !== true) {
      this.addNewComponent();
    }
  }

  componentWillReceiveProps(newProps) {
    this.addInitialComponents(newProps);
  }

  getNewComponent = (props = {}) => {
    const component = this.props.children;
    const newProps = {};
    const newAddCounter = this.state.componentsCounter + 1;
    Object.assign(newProps, component.props, props, {
      multi: true,
    });
    newProps.valueId = newProps.valueId || `${component.props.id}-${newAddCounter}`;
    const newComponent = React.cloneElement(component, newProps);
    const newComponentObj = {
      componentId: newComponent.props.valueId || newComponent.props.id,
      component: newComponent,
    };
    return newComponentObj;
  }

  addNewComponent = () => {
    if(typeof this.props.addCallback !== 'undefined') {
      const component = this.props.children;
      this.props.addCallback(`${component.props.id}-${this.state.componentsCounter + 1}`);
    }
    const newAddCounter = this.state.componentsCounter + 1;
    const newComponentObj = this.getNewComponent();
    const newComponents = [...this.state.childComponents, newComponentObj];
    this.setState({
      childComponents: newComponents,
      componentsCounter: newAddCounter,
    });
  }

  addPropsToComponent = (component, newId) => {
    return React.cloneElement(
      component,
      {
        multi: true,
        valueId: newId
      }
    );
  }

  removeComponent = (componentId) => {
    const newComponents = this.state.childComponents.filter(item =>
      item.componentId !== componentId
    );
    if(typeof this.props.removeCallback !== 'undefined') {
      this.props.removeCallback(componentId);
    }
    this.setState({
      childComponents: newComponents,
    });
  }

  render() {
    const self = this;
    let removeButtonLimit = this.props.initWithZero === true ? 0 : 1;
    return (
      <MaeveMultiStyle className={`maeve-multi ${this.props.className || ''}`}>
        { this.state.childComponents.map((val, key) => (
            <MaeveMultiItem key={val.componentId} className="maeve-multi-item">
              { val.component }
              {
                this.state.childComponents.length > removeButtonLimit
              ?
              <div className="remove-button">
                <AddRemoveButton
                  className={this.props.removeButtonClass}
                  onClick={ this.removeComponent.bind(null, val.componentId) }
                > { this.props.removeButtonText || '-' } </AddRemoveButton>
              </div>
              : ''
              }
            </MaeveMultiItem>
        ))
        }
        <div className="add-button">
          <AddRemoveButton
            className={this.props.addButtonClass}
            onClick={ this.addNewComponent.bind(null) }>{this.props.addButtonText || '+'}
          </AddRemoveButton>
        </div>
      </MaeveMultiStyle>
    );
  }
};

MaeveMulti.propTypes = {
  addCallback: PropTypes.func,
  removeCallback: PropTypes.func,
  componentProps: PropTypes.array,
  addButtonClass: PropTypes.string,
  removeButtonClass: PropTypes.string,
  initWithZero: PropTypes.bool,
};

export default MaeveMulti;
