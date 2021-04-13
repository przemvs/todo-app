import * as types from "./types";

export const incrementValue = () => ({
  type: types.INCREMENT
});

export const incrementByValue = (value) => ({
  type: types.INCREMENT_BY_VALUE,
  payload: value
});

export const decrementValue = () => ({
  type: types.DECREMENT
});
