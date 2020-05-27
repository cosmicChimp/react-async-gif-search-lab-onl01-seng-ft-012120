import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }
  fetchGifs = (inputValue = "") => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=Tz7Zs3UmXn080sWJWHfOvH3tUJwkG7C2&rating=g`
    )
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          gifs: data.data.slice(0, 3).map((gif) => gif.images.original.url),
        })
      );
  };

  componentDidMount() {
    this.fetchGifs();
  }
  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
