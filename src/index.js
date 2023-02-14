import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>How are you!</h2>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);