import React from "react";
import Banner from "./Banner";
import Exhibit from "./Exhibit";

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
        </ul>
      </Exhibit>
    </div>
  );
};

export default App;
