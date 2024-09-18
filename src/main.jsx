import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import List from "./Form.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <List />
  </StrictMode>
);
