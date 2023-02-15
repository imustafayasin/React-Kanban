"use client";
import Sidebar from "../components/Sidebar";
import ContentHeader from "../components/ContentHeader";
import { useState } from "react";

export default function Home() {
  const [columns, setColumns] = useState([]);

  let style = {
    content: {
      height: "calc(100% - 85px)",
      width: "calc(100vw - 312px)",
    },
  };

  return (
    <div className="mx-auto flex flex-row h-full overflow-hidden w-full	relative">
      <Sidebar setColumns={setColumns} />
      <main className="w-full">
        <ContentHeader columns={columns} />
        <div
          style={style.content}
          className="content bg-gray-100	 px-10 p-8 flex gap-6 overflow-x-auto	"
        >
          {columns.map((column, i) => {
            return (
              <div key={i} className="board shrink-0	 h-full min-w-[330px]">
                <div className="board-header flex items-center mb-4 d-flex gap-2">
                  <div className="w-3 h-3 border rounded-full bg-sky-500"></div>
                  <h5 className="title text-sm	font-medium">
                    {column.name} ({column.tasks.length})
                  </h5>
                </div>
                <div className="board-items">
                  {column.tasks.map((task) => {
                    return (
                      <div
                        key={task.id}
                        className="board-item bg-white cursor-pointer shadow mb-3 rounded-lg	 py-5 px-4"
                      >
                        <h2 className="mb-2 text-medium font-semibold">{task.name}</h2>
                        <p className="text-xs text-gray-600">0 of 1 subtasks</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
