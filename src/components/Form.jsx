import React, { useEffect, useState } from "react";

const Form = () => {
  const initObjs = [];
  const [objs, setObjs] = useState(initObjs);
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

  const submitHandler = (e) => {
    e.preventDefault();

    // new obj
    const newObj = {
      name: name,
      comment: comment,
      tech: tech
    };

    // add new obj to data source
    setObjs([...objs, newObj]);

    // clean up inputs
    setName("");
    setComment("");
  };

  // get the final result
  useEffect(() => {
    console.table(objs);
  }, [objs]);

  return (
    <form onSubmit={submitHandler}>
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
        <label>Tech</label>
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
