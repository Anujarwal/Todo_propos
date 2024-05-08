import React from "react";

const ListItem = ({ todo, deleteTodo, editTodo }) => {
  const { text } = todo;
  return (
    <li className="list-group-item my-2">
      <h3>{text}</h3>
      {/* <p>id : {id}</p> */}
      <span className="float-end">
        <button
          className="btn btn-warning rounded-0 text-light mx-1"
          onClick={() => editTodo(todo)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger rounded-0 mx-1"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
