import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Introduction from "./Greeting.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Introduction />
    <App />
    <Animals />
  </StrictMode>
);

function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  return <button style={buttonStyle}>{props.text}</button>;
}

function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function Animals() {
  const animals = ["Dog", "Cat"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
