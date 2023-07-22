import React, { useState, useEffect } from "react";
import axios from "axios";

const IPDisplay = ({ ipType }) => {
  const [ipAddress, setIPAddress] = useState(null);

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await axios.get(`https://api64.ipify.org?format=json`);
        setIPAddress(response.data[ipType]);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIPAddress();
  }, [ipType]);

  return (
    <div>
      <h3>Your Public {ipType === "ip" ? "IPv4" : "IPv6"} Address:</h3>
      <p>{ipAddress || "Loading..."}</p>
    </div>
  );
};

export default IPDisplay;
