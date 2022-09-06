import React, { useState } from "react";
import "./App.css";
import JSONData from "./MOCK_DATA.json";

function App() {
  const [data, setData] = useState("");

  const handleData = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" placeholder="Search here..." onChange={handleData} />
      {JSONData.filter((val) => {
        if (data == "") {
          return val;
        } else if (val.first_name.toLowerCase().includes(data.toLowerCase())) {
          return val;
        } else if (val.last_name.toLowerCase().includes(data.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>
              {val.first_name} {val.last_name}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
