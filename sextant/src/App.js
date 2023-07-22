import React, { Component } from "react";
import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import IPDisplay from "./IPDisplay";
import PylonConnector from "./PacketLatency";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Banner with application name */}
        <Banner bannerText="Sextant - Network Information" />

        {/* Exhibit 1: Public IPv4 Address */}
        <Exhibit name="Public IPv4 Address">
          <IPDisplay url="https://api.ipify.org?format=json" />
          <p>
            This is your public IPv4 address. It uniquely identifies your device
            on the internet.
          </p>
        </Exhibit>

        {/* Exhibit 2: Public IPv6 Address */}
        <Exhibit name="Public IPv6 Address">
          <IPDisplay url="https://api64.ipify.org?format=json" />
          <p>
            This is your public IPv6 address. IPv6 allows for more unique
            addresses than IPv4, enabling better internet scalability.
          </p>
        </Exhibit>

        {/* Exhibit 3: Pylon Packet Latency */}
        <Exhibit name="Pylon Packet Latency">
          <PylonConnector />
          <p>
            Pylon measures the latency of packets sent to your device in
            milliseconds. Lower latency means better network performance.
          </p>
        </Exhibit>
      </div>
    );
  }
}

export default App;
