import React, { Component } from "react";

class GifList extends Component {
  renderGifs() {
    return this.props.gifs.map((gif, index) => {
      return (
        <li>
          <img key={index} src={gif} alt="" />
        </li>
      );
    });
  }

  render() {
    return <ul>{this.renderGifs()}</ul>;
  }
}

export default GifList;
