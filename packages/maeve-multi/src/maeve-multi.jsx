import React from 'react';

class MaeveMulti extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      childComponents: [],
      componentsCounter: 0,
    };
  }

  componentDidMount() {
    if(typeof this.props.componentProps !== 'undefined') {
      const newComponents = [];
      const componentsList = this.props.componentProps.map((props, key) => {
        newComponents.push(this.getNewComponent(props));
      })
      this.setState({
        childComponents: newComponents,
        componentsCounter: newComponents.length,
      });
    } else {
      this.addNewComponent();
    }
  }

  getNewComponent = (props = {}) => {
    const component = this.props.children;
    const newProps = {};
    const newAddCounter = this.state.componentsCounter + 1;
    Object.assign(newProps, component.props, props, {
      multi: true,
      valueId: `${component.props.id}-${newAddCounter}`,
    });
    const newComponent = React.cloneElement(component, newProps);
    const newComponentObj = {
      componentId: newComponent.props.id,
      component: newComponent,
    };
    return newComponentObj;
  }

  addNewComponent = () => {
    const newAddCounter = this.state.componentsCounter + 1;
    const newComponentObj = this.getNewComponent();
    const newComponents = [...this.state.childComponents, newComponentObj];
    this.setState({
      childComponents: newComponents,
      componentsCounter: newAddCounter,
    });
    if(typeof this.props.addCallback !== 'undefined') {
      this.props.addCallback(newComponentObj.component.props.id);
    }
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
    this.setState({
      childComponents: newComponents,
    });
    if(typeof this.props.removeCallback !== 'undefined') {
      this.props.removeCallback(componentId);
    }
  }

  render() {
    const self = this;
    return (
      <div className="maeve-multi">
        { this.state.childComponents.map((val, key) => (
            <div key={val.componentId} className="maeve-multi-item">
              { val.component }
              { this.state.childComponents.length > 1 ?
              <div
                className="remove-button"
                onClick={ this.removeComponent.bind(null, val.componentId) }
              > - </div>
              : ''
              }
            </div>
        ))
        }
        <div className="add-button" onClick={ this.addNewComponent.bind(null) }> + </div>
      </div>
    );
  }
};

MaeveMulti.propTypes = {
  addCallback: React.PropTypes.func,
  removeCallback: React.PropTypes.func,
  componentProps: React.PropTypes.array,
};

export default MaeveMulti;