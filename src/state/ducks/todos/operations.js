import { addEmptyRow, requestAddToDo, requestEditToDo, requestDeleteToDo } from "./actions";

export const addToDo = (toDo) => async (dispatch) => {
  await dispatch(requestAddToDo(toDo));
};

export const editToDo = (toDoId) => async (dispatch) => {
  await dispatch(requestEditToDo(toDoId));
};

export const deleteToDo = (toDoId) => async (dispatch) => {
  await dispatch(requestDeleteToDo(toDoId));
};

export { addEmptyRow };
