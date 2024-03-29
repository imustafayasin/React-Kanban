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
    addTask: (state, { payload }) => {
      console.log(state);
      const column = state.values.find((t) => t._id == payload.columnId);
      console.log({ payload }, state.values, { column });
      console.log(column);
      column.tasks.push({
        _id: payload._id,
        columnId: payload.columnId,
        name: payload.name,
        description: payload.description,
        subTasks: payload.subTasks,
      });
    },
    deleteTask: (state, { payload }) => {
      const column = state.values.find((t) => t._id == payload.column_id);
      column.tasks.splice(
        column.tasks.findIndex((t) => t._id == payload.task_id),
        1
      );
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

export const { setColumns, getById, updateTaskColumn, deleteTask, addTask } =
  columnStore.actions;
export default columnStore.reducer;
