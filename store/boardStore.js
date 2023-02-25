import { createSlice } from "@reduxjs/toolkit";

export const boardStore = createSlice({
  name: "boardStore",
  initialState: { values: [], active: {} },
  reducers: {
    setBoards: (state, { payload }) => {
      state.values = payload;
    },
    addBoard: (state, { payload }) => {
      state.values.push(payload);
    },
    deleteBoard: (state, { payload }) => {
      var boardIndex = state.values.findIndex((b) => b._id == payload);
      state.values.splice(boardIndex, 1);
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setBoards, addBoard, setActive, deleteBoard } = boardStore.actions;
export default boardStore.reducer;
