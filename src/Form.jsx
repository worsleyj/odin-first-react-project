import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function Display() {
    if (submitted) {
      return (
        <div>
          <h1>{name}</h1>
          <h2>{email}</h2>
          <h2>{phoneNumber}</h2>
        </div>
      );
    }

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

  function generateCV() {
    setSubmitted(true);
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneNumberInput = document.getElementById("phoneNumber");
    setName(nameInput.value);
    setEmail(emailInput.value);
    setPhoneNumber(phoneNumberInput.value);
  }

  return (
    <div>
      <Display />
      <button onClick={generateCV}>Submit</button>
      <button onClick={() => setSubmitted(false)}>Edit</button>
    </div>
  );
}

export default Form;
