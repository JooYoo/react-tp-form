import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [tech, setTech] = useState("Vue");

  const setNameHandler = (e) => {
    setName(e.target.value);
  };

  const setCommentHandler = (e) => {
    setComment(e.target.value);
  };

  const setTechHandler = (e) => {
    setTech(e.target.value);
  };

  return (
    <form>
      <h4>Form</h4>

      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={setNameHandler} />
      </div>

      <div>
        <label>Comment</label>
        <textarea value={comment} onChange={setCommentHandler}></textarea>
      </div>

      <div>
        <select value={tech} onChange={setTechHandler}>
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
