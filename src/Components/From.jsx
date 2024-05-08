import React, { useEffect, useState } from "react";

const From = ({ addTodo, edit, updateTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.isEdit) {
      updateTodo(edit.todo.id, text);
    } else {
      addTodo(text);
    }

    setText("");
  };

  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);

  return (
    <>
      <form className="container my-5" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="Enter Text"
            className="form-control"
            // id="exampleInputEmail1"
            // aria-describedby="emailHelp"
            required
          />
        </div>
        <button className="btn btn-primary w-100">Submit</button>
      </form>
    </>
  );
};

export default From;
