import React, { useState } from "react";
import "../styles/Form.css";

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function Inputs() {
    function CustomInput({ id, saved }) {
      const [value, setValue] = useState(saved);
      return (
        <input
          id={id}
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      );
    }

    return (
      <div>
        <h1>CV Generator</h1>
        <h2>General Information</h2>
        <form>
          <label>Name</label>
          <CustomInput id="name" saved={name} />
          <label>Email</label>
          <CustomInput id="email" saved={email} />
          <label>Phone Number</label>
          <CustomInput id="phoneNumber" saved={phoneNumber} />
        </form>
      </div>
    );
  }

  function Buttons() {
    return (
      <div>
        <button onClick={generateCV}>Submit</button>
        <button onClick={() => setSubmitted(false)}>Edit</button>
      </div>
    );
  }

  function generateCV() {
    setSubmitted(true);
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneNumberInput = document.getElementById("phoneNumber");
    setName(nameInput.value);
    setEmail(emailInput.value);
    setPhoneNumber(phoneNumberInput.value);
  }

  if (submitted) {
    return (
      <div>
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h2>{phoneNumber}</h2>
        <Buttons />
      </div>
    );
  }

  return (
    <div>
      <Inputs />
      <Buttons />
    </div>
  );
}
