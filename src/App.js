import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import React from "react";
import { TodoItems } from "./TodoItem";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onDeleteValue = (value) => {
    const updatetodos = todos.filter((item) => item !== value);
    setTodos(updatetodos);
  };
  const onUpdateTodo = (newTodoValue, index) => {
    setTodos(todos.map((val, idx) => (idx === index ? newTodoValue : val)));
  };

  const onAddButtonClicked = () => {
    if (todoInput) {
      const isAdded = todos.includes(todoInput);
      if (isAdded) {
        alert("dmm");
      } else {
        setTodos([...todos, todoInput]);
        setTodoInput("");
      }
    }
  };
  return (
    <>
      <Box
        fontStyle={{ padding: 32 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            margin: "10px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Add your job"
            variant="outlined"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        </Box>

        <Button variant="outlined" onClick={onAddButtonClicked}>
          Add
        </Button>
      </Box>
      {todos.map((todo, index) => (
        <TodoItems
          value={todo}
          onDelete={onDeleteValue}
          onEdit={(value) => onUpdateTodo(value, index)}
          key={index}
        />
      ))}
    </>
  );
}

export default App;
