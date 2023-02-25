"use client";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as board from "../controller/boardController";
import * as column from "../controller/columnController";
import { setBoards, setActive } from "../store/boardStore";
import { setColumns } from "../store/columnStore";
import { showAddBoardModal } from "../store/modalStore";

export default function Sidebar({ showBoardModal }) {
  const boards = useSelector((state) => state.board.values);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(setBoards(await board.findAll()));
    })();
  }, []);

  async function getBoardColumns(boardId) {
    dispatch(setColumns(await column.findAll(boardId)));
  }
  return (
    <>
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
                    onClick={() => {
                      getBoardColumns(b._id);
                      dispatch(setActive(b));
                    }}
                    className={`select-none px-3 py-2  rounded-md  hover:bg-gray-100  text-gray-700 flex  items-center`}
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
                dispatch(showAddBoardModal(true));
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
