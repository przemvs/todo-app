import * as types from "./types";

export const addEmptyRow = () => ({
  type: types.ADD_EMPTY_ROW
});

export const requestAddToDo = (toDo) => ({
  type: types.ADD,
  payload: toDo
});

export const requestDeleteToDo = (todoId) => ({
  type: types.DELETE,
  payload: todoId
});

export const requestEditToDo = (todoId) => ({
  type: types.DELETE,
  payload: todoId
});
