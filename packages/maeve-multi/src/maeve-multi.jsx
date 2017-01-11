import React from 'react';

export default class MaeveMulti extends React.Component {
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
  }

  removeComponent = (id) => {
    const newComponents = this.state.childComponents.filter(item =>
      item.id !== id
    );
    this.setState({
      childComponents: newComponents,
    });
  }

  render() {
    const self = this;
    return (
      <div className="maeve-multi">
        { this.state.childComponents.map((val, key) => (
            <div key={val.id}>
              {val.comp}
              <div
                className="remove-button"
                onClick={ this.removeComponent.bind(null, val.id) }
              > - </div>
            </div>
        ))
        }
        <div className="add-button" onClick={ this.addNewComponent.bind(null) }> + </div>
      </div>
    );
  }
};