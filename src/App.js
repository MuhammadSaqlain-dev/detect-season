import React, { Component } from "react";
import LoaderSpinner from "./LoaderSpinner";
import SeasonsDisplay from "./SeasonsDisplay";

class App extends Component {
  state = { lat: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );
  }

  renderContent = () => {
    if (this.state.lat) return <SeasonsDisplay lat={this.state.lat} />;
    if (this.state.error)
      return <h4>"Opps! there is error while fetching data."</h4>;
    return <LoaderSpinner message="Allow us to know your location..." />;
  };

  render() {
    // Avoid Conditionals in render()
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
