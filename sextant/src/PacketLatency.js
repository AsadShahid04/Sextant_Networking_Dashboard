// Import required dependencies
import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

// Create a new WebSocket client connected to ws://localhost:55455
const client = new W3CWebSocket("ws://localhost:55455");

// Define a React class component called PylonConnector
class PylonConnector extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with latency set to null
    this.state = {
      latency: null,
    };
  }

  // Lifecycle method: called after the component is mounted in the DOM
  componentDidMount() {
    client.onmessage = (message) => { // Listen for incoming messages from the WebSocket client
      this.setState({ // Update the state with the new latency value
        latency: new Date().getTime() - message.data, // Calculate packet latency by subtracting message.data from the current time
      });
    };
  }

  // Render method: returns the JSX representation of the component
  render() {
    return (
      // Display the packet latency inside a span with the class "PylonConnector"
      <span className="PylonConnector">
        {this.state.latency}
        </span>
    );
  }
}

// Export the PylonConnector component to be used in other parts of the application
export default PylonConnector;
