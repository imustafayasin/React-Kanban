import { createSlice } from "@reduxjs/toolkit";

export const columnStore = createSlice({
  name: "columnStore",
  initialState: { values: [] },
  reducers: {
    setColumns: (state, action) => {
      state.values = action.payload;
    },
    getById: (state, action) => {
      return state.find((b) => b._id == action.payload._id);
    },
  },
});

export const { setColumns, getById } = columnStore.actions;
export default columnStore.reducer;
