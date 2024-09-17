import "./List.css";

function List() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h2>General Information</h2>
      <form>
        <label>Name</label>
        <input />
        <label>Email</label>
        <input />
        <label>Phone Number</label>
        <input />
      </form>

      <h2>Educational Experience</h2>
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
      </form>
    </div>
  );
}

export default List;
