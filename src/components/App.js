import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import unsplashKey from "./unsplash.config";

class App extends React.Component {
  onSearchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization: `Client-ID ${unsplashKey}`,
        },
      })
      .then((results) => {
        console.log(results);
      });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
