import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function Display() {
    if (submitted) {
      return (
        <div>
          <h1>{name}</h1>
          <h2>{email}</h2>
          <h2>252-621-0844</h2>
        </div>
      );
    }

    function CustomInput({ id, saved }) {
      const [value, setValue] = useState(saved);
      // if (submitted) {
      //   return <h2>{value}</h2>;
      // }
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
          <input />
        </form>
      </div>
    );
  }

  function generateCV() {
    setSubmitted(true);
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    setName(nameInput.value);
    setEmail(emailInput.value);
  }

  function editCV() {
    setSubmitted(false);
  }
  return (
    <div>
      <Display />

      {/* <h2>Educational Experience</h2>
      <form>
        <label>School Name</label>
        <input />
        <label>Field of Study</label>
        <input />
        <label>Date of Study</label>
        <input />
      </form>

      <h2>Work Experience</h2>
      <form>
        <label>Company Name</label>
        <input />
        <label>Position Title</label>
        <input />
        <label>Main Responsbilities</label>
        <textarea />
        <label>Date of Work</label>
        <input />
      </form> */}
      <button onClick={generateCV}>Submit</button>
      <button onClick={editCV}>Edit</button>
    </div>
  );
}

export default Form;
