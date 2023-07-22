import React, { Component } from "react";
import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import IPDisplay from "./IPDisplay";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="Sextant" />
        <Exhibit name="Public IPv4 Address">
          <IPDisplay url="https://api.ipify.org?format=json" />
        </Exhibit>
        <Exhibit name="Public IPv6 Address">
          <IPDisplay url="https://api64.ipify.org?format=json" />
        </Exhibit>
      </div>
    );
  }
}

export default App;
