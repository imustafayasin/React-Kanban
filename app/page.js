"use client";
import Sidebar from "../components/Sidebar";
import ContentHeader from "../components/ContentHeader";
import Columns from "../components/Columns";
import Modals from "../components/modals";

import { store } from "../store/index";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Modals />
      <div className="mx-auto flex flex-row h-full overflow-hidden w-full	relative">
        <Sidebar />
        <main style={{ width: "calc(100% - 312px)" }} className="w-full">
          <ContentHeader />
          <Columns />
        </main>
      </div>
    </Provider>
  );
}
