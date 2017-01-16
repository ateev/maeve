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
    this.addNewComponent();
  }

  addNewComponent = () => {
    const newAddCounter = this.state.componentsCounter + 1;
    const childComponent = this.props.children;
    const newComponentId = `${childComponent.props.id}-${newAddCounter}`;
    const component = this.addPropsToComponent(this.props.children, newComponentId);
    const newComponent = {
      componentId: newComponentId,
      component,
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
};

export default MaeveMulti;