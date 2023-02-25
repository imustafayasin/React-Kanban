import { createSlice } from "@reduxjs/toolkit";

const modalStore = createSlice({
  name: "CreateSlice",
  initialState: {
    showAddBoardModal: false,
    showAddTaskModal: false,
    showUpdateTaskModal: false,
  },
  reducers: {
    showAddBoardModal: (state, { payload }) => {
      state.showAddBoardModal = payload;
    },
    showAddTaskModal: (state, { payload }) => {
      state.showAddTaskModal = payload;
    },
    showUpdateTaskModal: (state, { payload }) => {
      state.showUpdateTaskModal = payload;
    },
  },
});

export const { showAddBoardModal, showAddTaskModal, showUpdateTaskModal } =
  modalStore.actions;
export default modalStore.reducer;
