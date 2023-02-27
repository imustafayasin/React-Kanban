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
    updateTaskColumn(state, { payload }) {
      const oldColumn = state.values.find((t) => t._id == payload.oldColumnId);
      const newColumn = state.values.find((t) => t._id == payload.newColumnId);
      const updatedTask = oldColumn?.tasks.findIndex((t) => t._id == payload.task._id);
      newColumn.tasks.push({
        ...oldColumn.tasks.splice(updatedTask, 1).shift(),
        ...payload.task,
      });
    },
  },
});

export const { setColumns, getById, updateTaskColumn } = columnStore.actions;
export default columnStore.reducer;
