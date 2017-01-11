import React from 'react';

export default class MaeveInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });

    if ( typeof this.props.source !== undefined ) {
      console.log(this.props.source);
    }

  }

  render() {
    return (
      <div className="maeve-input">
        <input
          type="text"
          name="maeve"
          onChange={this.handleChange}
        />
      </div>
    );
  }
};