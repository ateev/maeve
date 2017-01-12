import React from 'react';

export default class MaeveInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      autocompleteSuggestions: [],
    };
  }

  filterResults = (item, query) => item.toLowerCase().includes(query.toLowerCase())

  handleChange = (event) => {
    let updatedValue = event.target.value;
    let updatedAutocompleteSuggestions = this.state.autocompleteSuggestions;
    const source = this.props.source;

    if ( typeof source !== undefined ) {
      if ( source instanceof Array ) {
        updatedAutocompleteSuggestions = source
          .filter(
            item => this.filterResults(item, updatedValue)
          );
      }
    }
    this.setState({
      value: updatedValue,
      autoCompleteSuggestions: updatedAutocompleteSuggestions,
    });
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