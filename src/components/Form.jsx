import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [tech, setTech] = useState("Vue");

  return (
    <form>
      <h4>Form</h4>

      <div>
        <label>Name</label>
        <input type="text" value={name} />
      </div>

      <div>
        <label>Comment</label>
        <textarea value={comment}></textarea>
      </div>

      <div>
        <select value={tech}>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
          <option value="Angular">Angular</option>
        </select>
      </div>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
