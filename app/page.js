"use client";
import Sidebar from "../components/Sidebar";
import ContentHeader from "../components/ContentHeader";
import Columns from "../components/Columns";
import AddTaskModal from "../components/modals/AddTaskModal";
import AddBoardModal from "../components/modals/AddBoardModal";
import UpdateTaskModal from "../components/modals/UpdateTaskModal";

import React, { useEffect, useState } from "react";
import { store } from "../store/index";
import { Provider, useSelector } from "react-redux";

export default function Home() {
  // async function getTaskDetail(taskId) {
  //   setselectedTask(await getById(taskId));
  //   setUpdateModalIsOpen(true);
  // }

  return (
    <Provider store={store}>
      <AddBoardModal />
      <AddTaskModal />
      <UpdateTaskModal />
      <div className="mx-auto flex flex-row h-full overflow-hidden w-full	relative">
        <Sidebar />
        <main className="w-full">
          <ContentHeader />
          <Columns />
        </main>
      </div>
    </Provider>
  );
}
