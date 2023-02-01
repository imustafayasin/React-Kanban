"use client";
import { useState } from "react";
import { TableCellsIcon } from "@heroicons/react/24/solid";
export default function Sidebar() {
  const [mockBoards, setMockBoard] = useState([
    "Example Board 1",
    "Example Board 2",
    "Example Board 3",
  ]);
  const [showCreateNewBoardPanel, setShowCreateNewBoardPanel] = useState(false);
  const [activeBoard, setActiveBoard] = useState(1);
  return (
    <aside className="w-1/5 p-8 border-r-gray-400 border-r h-full bg-neutral-600 text-white">
      <div className="pb-10 text-center text-xl">Kanban app</div>

      <div className="Boards ">
        <label className="text-sm">ALL BOARDS (9)</label>
        <nav className="flex flex-col mt-4 gap-4">
          {mockBoards.map((b, i) => {
            return (
              <button
                key={b}
                onClick={() => setActiveBoard(i)}
                className={`${
                  activeBoard == i
                    ? "bg-violet-500 shadow-lg"
                    : "bg-neutral-600"
                } px-4 py-2  rounded-lg	  text-neutral-300 flex  gap-5 items-center`}
              >
                <TableCellsIcon className="w-[18px] " />
                {b}
              </button>
            );
          })}
          <div>
            <button
              onClick={() => {
                setMockBoard([...mockBoards, "test"]);
              }}
              className="px-4 py-2 flex w-full  gap-5 items-center rounded-lg bg-violet-500 shadow-lg	  text-neutral-300"
            >
              <TableCellsIcon className="w-[18px] " />
              <span>+Create a new board</span>
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
}
