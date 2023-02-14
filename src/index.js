import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>How are you!</h2>
    </div>
  );
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
root.render(<App />);