import { createSlice } from "@reduxjs/toolkit";

const modalStore = createSlice({
  name: "CreateSlice",
  initialState: {
    showAddBoardModal: false,
    showUpdateBoardModal: false,
    showAddTaskModal: false,
    showUpdateTaskModal: false,
  },
  reducers: {
    showAddBoardModal: (state, { payload }) => {
      state.showAddBoardModal = payload;
    },
    showUpdateBoardModal: (state, { payload }) => {
      state.showUpdateBoardModal = payload;
    },
    showAddTaskModal: (state, { payload }) => {
      state.showAddTaskModal = payload;
    },
    showUpdateTaskModal: (state, { payload }) => {
      state.showUpdateTaskModal = payload;
    },
  },
});

export const {
  showAddBoardModal,
  showAddTaskModal,
  showUpdateBoardModal,
  showUpdateTaskModal,
} = modalStore.actions;
export default modalStore.reducer;
