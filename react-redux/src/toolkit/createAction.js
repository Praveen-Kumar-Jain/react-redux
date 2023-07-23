import { createAction } from '@reduxjs/toolkit'
export function addTodo(text) {
  return {
    type: "ADD_TODO",
    payload: { text },
  };
}

export const addTodoAction = createAction("ADD_TODO");
addTodo({ text: "Buy milk" });
// {type : "ADD_TODO", payload : {text : "Buy milk"}})
