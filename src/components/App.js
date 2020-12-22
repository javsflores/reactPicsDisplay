import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import unsplashKey from "./unsplash.config";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${unsplashKey}`,
      },
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
