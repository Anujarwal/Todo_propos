import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import From from "./Components/From";
import ListGroup from "./Components/ListGroup";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
    todo: {},
    isEdit: false,
  });

  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
    };

    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (oldTodo) => {
    setEdit({
      todo: oldTodo,
      isEdit: true,
    });
  };

  const updateTodo = (oldId, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === oldId ? { id: oldId, text: newText } : todo
      )
    );

    setEdit({
      todo: {},
      isEdit: false,
    });
  };
  return (
    <>
      <Navbar />

      <From addTodo={addTodo} edit={edit} updateTodo={updateTodo} />
      <ListGroup todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </>
  );
};

export default App;
