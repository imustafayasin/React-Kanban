"use client";
import { useState } from "react";
import { QueueListIcon, MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";
export default function Sidebar() {
  const [mockBoards, setMockBoard] = useState([
    "Example Board 1",
    "Example Board 2",
    "Example Board 3",
  ]);
  const [showCreateNewBoardPanel, setShowCreateNewBoardPanel] = useState(false);
  const [activeBoard, setActiveBoard] = useState(1);
  return (
    <aside className="min-w-[312px] p-8 border-r-gray-200 border-r h-full">
      <div className="pb-10 text-center text-3xl">
        Kanba<sup>n</sup>
      </div>
      <div className="search border flex px-3.5 py-2.5 items-center shadow rounded-lg mb-6">
        <MagnifyingGlassIcon className="min-w-[20px] h-5  text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full focus-visible:outline-0 border-0 "
        />
      </div>

      <div className="Boards ">
        <label className="text-sm">ALL BOARDS (9)</label>
        <nav className="flex flex-col mt-4 gap-4">
          {mockBoards.map((b, i) => {
            return (
              <button
                key={b}
                onClick={() => setActiveBoard(i)}
                className={`${
                  activeBoard == i ? "bg-slate-100" : "	"
                } px-3 py-2  rounded-md font-medium  text-gray-700 flex  items-center`}
              >
                {/* <QueueListIcon className="w-6 h-6 text-gray-500 mr-3" /> */}
                {b}
              </button>
            );
          })}
          <div>
            <button
              onClick={() => {
                setMockBoard([...mockBoards, "test"]);
              }}
              className="px-4 py-2 flex w-full items-center rounded-lg border  shadow-sm"
            >
              <PlusIcon className="w-6 h-6 text-gray-500 mr-3" />
              <span className="text-black">Create a new board</span>
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
}
