import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Form from "./components/Form.jsx";
import Clock from "./components/Clock.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Form />
    <Clock />
  </StrictMode>
);
