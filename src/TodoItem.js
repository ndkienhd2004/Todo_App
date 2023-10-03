import React, { useState } from "react";
import { Box, IconButton, Stack, Typography, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

export const TodoItems = ({ value, onDelete, onEdit }) => {
  const [todoInput, setTodoInput] = useState(value); // Initialize with value
  const [isEditing, setEditing] = useState(false);

  const onDeleteButtonClicked = () => {
    onDelete(value);
  };

  const onEditButtonClicked = () => {
    setEditing(true);
  };

  const onInputChanged = (e) => {
    setTodoInput(e.target.value);
  };

  const onDoneButtonClicked = () => {
    onEdit(todoInput);
    setEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <Box
          sx={{
            maxWidth: "290px",
            margin: "auto", // Center horizontally
            marginTop: 2,
            border: "1px solid #1976d2",
            padding: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack direction="row">
            <TextField
              value={todoInput}
              onChange={onInputChanged}
              variant="outlined"
              size="small"
            />
            <IconButton onClick={onDoneButtonClicked}>
              <DoneIcon />
            </IconButton>
          </Stack>
        </Box>
      ) : (
        <Box>
          <Stack
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>{value}</Typography>
            <IconButton onClick={onDeleteButtonClicked}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={onEditButtonClicked}>
              <EditIcon />
            </IconButton>
          </Stack>
        </Box>
      )}
    </>
  );
};
