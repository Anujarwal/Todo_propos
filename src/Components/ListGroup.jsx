import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ul className="list-group container">
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default ListGroup;
