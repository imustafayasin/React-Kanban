import { configureStore } from "@reduxjs/toolkit";
import boardStore from "./boardStore";
import userStore from "./userStore";
import columnStore from "./columnStore";
import modalStore from "./modalStore";

export const store = configureStore({
  reducer: {
    board: boardStore,
    user: userStore,
    column: columnStore,
    modal: modalStore,
  },
});
