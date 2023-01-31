"use client";
import { useState } from "react";

export default function Sidebar() {
  const [mockBoards] = useState([
    "Example Board 1",
    "Example Board 2",
    "Example Board 3",
  ]);
  const [activeBoard, setActiveBoard] = useState(1);
  return (
    <aside className="basis-80 p-8 border-r-gray-400 border-r h-full bg-neutral-600 text-white">
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
                } p-4 rounded-lg	  text-neutral-300`}
              >
                {" "}
                {b}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
