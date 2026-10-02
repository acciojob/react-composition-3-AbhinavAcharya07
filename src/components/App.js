import React from "react";
import Tooltip from "./Tooltip"; // Adjust path if Tooltip is inside a components folder
import './../styles/App.css';

const App = () => {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
        {/* Do not remove the main div */}
        <h1>Tooltip Component Example</h1>
        
        <Tooltip text="This is a tooltip!">
          <span style={{ cursor: "pointer", borderBottom: "1px dashed black" }}>
            Hover over me
          </span>
        </Tooltip>
    </div>
  );
};

export default App;
