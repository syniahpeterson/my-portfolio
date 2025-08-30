// Import React and ReactDOM
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import global styles and main App component
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";

// Mount the App component to the DOM
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
