import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Navbar from "./navbar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

function Main() {
  return (
    <div className="main-container">
      <Navbar />
    </div>
  );
}
