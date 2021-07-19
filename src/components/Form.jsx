import React from "react";

const Form = () => {
  return (
    <form>
      <h4>Form</h4>

      <div>
        <label>Name</label>
        <input type="text" />
      </div>

      <div>
        <label>Comment</label>
        <textarea></textarea>
      </div>

      <div>
        <select value="Vue">
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
