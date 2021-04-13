import typeToReducer from "type-to-reducer";

import * as types from "./types";

const initialState = {
  todos: {
    items: [
      { id: 1, text: "Routingi", addedDate: new Date(), isRemoved: false },
      { id: 2, text: "Jak działa redux ( prosty counter )", addedDate: new Date(), isRemoved: false },
      { id: 3, text: "KendoGrid", addedDate: new Date(), isRemoved: false },
      { id: 4, text: "KendoGrid HOC", addedDate: new Date(), isRemoved: false }
    ],
    totalCount: 4
  },
  error: null,
  isRequestOngoing: false
};

export const todoReducer = typeToReducer(
  {
    [types.ADD_EMPTY_ROW]: (state) => ({
      ...state,
      todos: {
        ...state.todos,
        items: [
          ...state.todos.items,
          { id: state.todos.items.length + 1, inEdit: true, isRemoved: false, addedDate: new Date() }
        ]
      }
    }),

    [types.ADD]: (state, action) => ({
      ...state,
      todos: {
        items: [...state.todos.items, action.payload],
        totalCount: state.todos.totalCount + 1
      },
      isRequestOngoing: false
    }),

    [types.DELETE]: (state, action) => {
      const updateState = [...state.todos.items];
      const foundIndex = updateState.findIndex((item) => item.id === action.payload);
      updateState[foundIndex].isRemoved = true;

      return {
        ...state,
        todos: {
          items: updateState,
          totalCount: state.todos.totalCount - 1
        }
      };
    }
  },

  initialState
);

export default todoReducer;
