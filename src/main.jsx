import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Form from "./components/Form.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Form />
  </StrictMode>
);
