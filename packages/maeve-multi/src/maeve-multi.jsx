import React from 'react';

class MaeveMulti extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      childComponents: [{
        id: 0,
        comp: this.props.children,
      }],
      addCounter: 1,
    };
  }

  addNewComponent = () => {
    const newAddCounter = this.state.addCounter + 1;
    const newComp = {
      id: newAddCounter,
      comp: this.props.children,
    };
    const newComponents = [...this.state.childComponents, newComp];
    this.setState({
      childComponents: newComponents,
      addCounter: newAddCounter,
    });
    if(typeof this.props.addCallback !== 'undefined') {
      this.props.addCallback(newAddCounter - 1);
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

  removeComponent = (id) => {
    const newComponents = this.state.childComponents.filter(item =>
      item.id !== id
    );
    this.setState({
      childComponents: newComponents,
    });
    if(typeof this.props.removeCallback !== 'undefined') {
      this.props.removeCallback(id - 1);
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