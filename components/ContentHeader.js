"use-client";
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as board from "../controller/boardController";
import { deleteBoard, setActive } from "../store/boardStore";
import { showUpdateBoardModal, showAddTaskModal } from "../store/modalStore";
export default function ContentHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownMenuRef = useRef();
  const activeBoard = useSelector((state) => state.board.active);
  const dispatch = useDispatch();
  function clickOutSide(e) {
    !e.composedPath().includes(dropdownMenuRef.current) && setShowDropdown(false);
  }
  useEffect(() => {
    document.addEventListener("click", clickOutSide);
    return () => {
      document.removeEventListener("click", clickOutSide);
    };
  }, [showDropdown]);
  return (
    <>
      {!!activeBoard["_id"] && (
        <div className="flex justify-between px-10 border-b border-gray-200   bg-gray-100 py-5 items-center">
          <h3 className="text-xl"> {activeBoard?.name}</h3>
          <div className="flex items-center">
            <button
              className="rounded py-2.5 px-4 text- border"
              onClick={() => dispatch(showAddTaskModal(true))}
            >
              Add New Task
            </button>
            <div className="dropdown" ref={dropdownMenuRef}>
              <EllipsisVerticalIcon
                onClick={() => setShowDropdown(true)}
                className=" w-10 h-7 ml-3 cursor-pointer"
              />

              {showDropdown && (
                <div className="dropdown-inner shadow pt-2  w-40 bg-white absolute rounded  right-9">
                  <button
                    onClick={async () => {
                      dispatch(showUpdateBoardModal(true));
                      const result = await board.getById(activeBoard._id);
                      dispatch(setActive(result));
                    }}
                    className=" mb-2 py-1 px-4  flex items-center hover:bg-slate-200 w-full text-left"
                  >
                    <PencilSquareIcon className="w-5 h-5 mr-2 text-gray-800" />
                    Update
                  </button>
                  <button
                    onClick={() => {
                      board.deleteBoard(activeBoard._id);
                      dispatch(deleteBoard(activeBoard._id));
                    }}
                    className=" mb-2 py-1 px-4  flex items-center hover:bg-slate-200 w-full text-left"
                  >
                    <TrashIcon className="w-5 h-6 mr-2 text-gray-800" />
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
