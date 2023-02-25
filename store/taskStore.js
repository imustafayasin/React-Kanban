import { createSlice } from "@reduxjs/toolkit";

export const taskStore = createSlice({
  name: "taskStore",
  initialState: { active: {} },
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setDoneSubtask: (state, { payload }) => {
      console.log({ ...payload });
      const subTasks = [...state.active.subTasks];
      subTasks.find((s) => s._id == payload._id).done = payload.done;
      state.active.subTasks = subTasks;
    },
  },
});

export const { setActive, setDoneSubtask } = taskStore.actions;
export default taskStore.reducer;
