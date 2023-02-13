"use client";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import AddBoardModal from "./modals/AddBoardModal";
import * as board from "controller/boardController";
import * as column from "controller/columnController";
import { useEffect, useState } from "react";

export default function Sidebar({ setColumns }) {
  const [createModalIsOpen, setCreateModalState] = useState(false);
  const [boards, setBoards] = useState([]);
  const [activeBoard, setActiveBoard] = useState(0);

  async function handleBoards() {
    setBoards((await board.findAll()).data);
  }
  async function getBoardColumns(id) {
    if (activeBoard == id) return;
    setTimeout(async () => {
      setColumns(await column.findAll(id));
    });
    setActiveBoard(id);
  }
  useEffect(() => {
    handleBoards();
  }, []);

  return (
    <>
      {createModalIsOpen && (
        <AddBoardModal
          show={createModalIsOpen}
          dispatchGet={handleBoards}
          onHide={setCreateModalState}
        />
      )}

      <aside className="min-w-[312px] p-8 border-r-gray-200 border-r h-full">
        <div className="pb-10 text-center text-3xl">
          Kanba<sup>n</sup>
        </div>
        <div className="search border flex px-3.5 py-2.5 items-center shadow rounded-lg mb-6">
          <MagnifyingGlassIcon className="min-w-[20px] h-5  text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search boards"
            className="w-full focus-visible:outline-0 border-0 "
          />
        </div>

        <div className="Boards ">
          <label className="text-sm pb-2 border-b block  w-full">ALL BOARDS (9)</label>
          {!!boards.length && (
            <nav className="flex flex-col mt-4 gap-4 overflow-y-auto max-h-[75vh]">
              {boards?.map((b, i) => {
                return (
                  <button
                    key={b._id}
                    onClick={() => getBoardColumns(b._id)}
                    className={` select-none px-3 py-2  rounded-md  hover:bg-hover-gray-100  text-gray-700 flex  items-center`}
                  >
                    {/* <TableCellsIcon className="w-6 h-6 text-gray-500 mr-3" /> */}
                    {b.name}
                  </button>
                );
              })}
            </nav>
          )}
          <div>
            <button
              onClick={() => {
                setCreateModalState(true);
              }}
              className="px-4 mt-4 py-2 select-none flex w-full items-center rounded-lg border  shadow-sm"
            >
              <PlusIcon className="w-6 h-6 text-gray-500 mr-3" />
              <span className="text-black">Create a new board</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
