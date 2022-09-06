import React from "react";
import "./App.css";
import JSONData from "./MOCK_DATA.json";

function App() {
  const [data, setData] = React.useState("");

  const handleData = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" placeholder="Search here..." onChange={handleData} />
      {JSONData.filter((val) => {
        if (data == "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(data.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
