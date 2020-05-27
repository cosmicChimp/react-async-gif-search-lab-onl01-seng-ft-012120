import React, { Component } from "react";

class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleOnSubmit = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    this.props.fetchGifs(this.state.inputValue);
  };

  handleOnChange = (e) => {
    e.persist();
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>Enter Keyword</label>
        <br />
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleOnChange}
        />
        <button>Find Results</button>
      </form>
    );
  }
}

export default GifSearch;
