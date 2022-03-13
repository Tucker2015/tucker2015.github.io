---
sidebar_position: 7
---

# Get Data from JSON API

```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const FeaturedStations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://vpn.kevtucker.com/stations")
      .then((res) => {
        setData(res.data.stations);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
  return (
    <div>
      <h1>Featured Stations</h1>
      <div className="item-container">
        {data.map((station) => (
          <div className="card" key={station.id}>
            <img src={station.logo} alt="" />
            <h3>{station.screenName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedStations;
```
