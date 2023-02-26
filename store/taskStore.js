import { createSlice } from "@reduxjs/toolkit";

export const taskStore = createSlice({
  name: "taskStore",
  initialState: {
    active: {},
  },
  reducers: {
    setActive: (state, action) => {
      state.active = { ...action.payload };
    },
    update: (state, { payload }) => {
      state.active = {
        ...state.active,
        ...payload,
      };
    },
    setDoneSubtask: (state, { payload }) => {
      const subTasks = [...state.active.subTasks];
      subTasks.find((s) => s._id == payload._id).done = payload.done;
    },
  },
});

export const { setActive, setDoneSubtask, update } = taskStore.actions;
export default taskStore.reducer;
