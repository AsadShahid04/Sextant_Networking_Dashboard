import React from "react";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import IPDisplay from './IPDisplay';


const App = () => {
  return (
    <div>
      <Banner title="Sextant" />
      <Exhibit title="First Exhibit">
        {/* Add any child components or data points */}
        <p>This is the content of the first exhibit.</p>
      </Exhibit>
      <Exhibit title="Second Exhibit">
        {/* Add any other child components or data points */}
        <ul>
          <li>Data point 1</li>
          <li>Data point 2</li>
          <li>Data point 3</li>
          <Exhibit title="Public IPv4 Address">
            <IPDisplay ipType="ip" />
          </Exhibit>

          <Exhibit title="Public IPv6 Address">
            <IPDisplay ipType="ip6" />
          </Exhibit>
        </ul>
      </Exhibit>
    </div>
  );
};

export default App;
