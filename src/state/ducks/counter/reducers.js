import typeToReducer from "type-to-reducer";

import * as types from "./types";

const initialState = {
  count: 0,
  clickedTimes: 0
};

export const counterReducer = typeToReducer(
  {
    [types.INCREMENT]: (state) => ({
      count: state.count + 1,
      clickedTimes: state.clickedTimes + 1
    }),
    [types.INCREMENT_BY_VALUE]: (state, action) => ({
      count: state.count + action.payload,
      clickedTimes: state.clickedTimes + 1
    }),
    [types.DECREMENT]: (state) => ({
      count: state.count - 1,
      clickedTimes: state.clickedTimes + 1
    })
  },

  initialState
);

export default counterReducer;
