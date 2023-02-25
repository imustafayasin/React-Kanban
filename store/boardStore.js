import { createSlice } from "@reduxjs/toolkit";

export const boardStore = createSlice({
  name: "boardStore",
  initialState: { values: [], active: {} },
  reducers: {
    setBoards: (state, { payload }) => {
      state.values = payload;
    },
    getById: (state, action) => {
      return state.find((b) => b._id == action.payload._id);
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setBoards, getById, setActive } = boardStore.actions;
export default boardStore.reducer;
