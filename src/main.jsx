import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import List from "./Form.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <List />
  </StrictMode>
);
