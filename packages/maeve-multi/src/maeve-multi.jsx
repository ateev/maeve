import React from 'react';

class MaeveMulti extends React.Component {
  constructor(props) {
    super(props)
    const childComponent = this.props.children;
    const newId = `${childComponent.props.id}-1}`;
    this.state = {
      childComponents: [{
        component: childComponent,
        componentId: newId,
      }],
      componentsCounter: 1,
    };
  }

  addNewComponent = () => {
    const newAddCounter = this.state.componentsCounter + 1;
    const newComponentId = `${childComponent.props.id}-${newAddCounter}}`;
    const newComponent = {
      componentId: newComponentId,
      component: this.props.children,
    };
    const newComponents = [...this.state.childComponents, newComponent];
    this.setState({
      childComponents: newComponents,
      componentsCounter: newAddCounter,
    });
    if(typeof this.props.addCallback !== 'undefined') {
      this.props.addCallback(newComponentId);
    }
  }

  addPropsToComponent = (component, key) => {
    const newId = component.props.id + '[' + key + ']';
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
            <div key={val.id} className="maeve-multi-item">
              { this.addPropsToComponent(val.comp, val.id) }
              { this.state.childComponents.length > 1 ?
              <div
                className="remove-button"
                onClick={ this.removeComponent.bind(null, val.id) }
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
};

export default MaeveMulti;