import React, { useState } from "react";
import "./Form.css";

function List() {
  const [submitted, setSubmitted] = useState(false);

  function Display() {
    if (submitted) {
      return (
        <div>
          <h1>false</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>CV Generator</h1>
        <h2>General Information</h2>
        <form>
          <label>Name</label>
          <input />
          <label>Email</label>
          <input />
          <label>Phone Number</label>
          <input />
        </form>
      </div>
    );
  }

  function generateCV() {
    // alert(submitted);
    setSubmitted(true);
    Display();
    console.log(submitted);
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
      <button>Edit</button>
    </div>
  );
}

export default List;
