import {
  XCircleIcon,
  ClipboardDocumentListIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { create } from "controller/boardController";

export default function AddTaskModal({ show, onHide, dispatchGet, columns }) {
  const [column, setColumn] = useState({ subTasks: [""] });
  function handleSetBoard(val) {
    setColumn({ ...column, ...val });
  }
  async function handleCreateBoard() {
    await create(board);
    onHide();
    dispatchGet();
  }

  return (
    <>
      <div
        className={`${
          !show ? "invisible" : ""
        } modal  z-20 w-full grid items-center justify-center	 absolute -translate-y-1/2	-translate-x-1/2	 h-full left-1/2 	top-1/2 p-4 "`}
      >
        <div className="modal-content z-20	 relative rounded-md p-6  bg-white w-[400px]	p-4">
          <div className="head mb-5">
            <div className="icon border mb-4 w-12 h-12 grid place-items-center rounded-[10px] shadow">
              <ClipboardDocumentListIcon className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold ">Create a new task</h2>
          </div>
          <div className="modal-content">
            <div className="input-group pb-3">
              <label className="text-sm pb-[6px] font-medium text-gray-700 block">
                Task name
              </label>
              <input
                type="text"
                onInput={(e) => {
                  handleSetBoard({ name: e.target.value });
                }}
                className="py-2.5  px-3.5 rounded-lg border w-full focus-visible:outline-0"
                placeholder="Enter task name"
              />
            </div>
            <div className="input-group mb-3">
              <label className="text-sm pb-[6px] font-medium text-gray-700 block">
                Add subtasks
              </label>
              <div className="max-h-40 overflow-y-auto">
                {column?.subTasks?.map((subTask, i) => {
                  return (
                    <div key={i} className="flex items-center gap-2 mb-2 pr-3">
                      <input
                        type="text"
                        onInput={(e) => {
                          let columns = column.subTasks;
                          columns[i] = e.target.value;
                          handleSetBoard({
                            subTasks: columns,
                          });
                        }}
                        className="w-full border  rounded-lg focus-visible:outline-0 py-2.5  px-3.5 "
                        placeholder="Enter subtask name"
                      />
                      {i != 0 && (
                        <XCircleIcon
                          onClick={() => {
                            handleSetBoard({
                              subTasks: column?.subTasks?.filter((b, ind) => i != ind),
                            });
                          }}
                          className="w-5 cursor-pointer  h-5"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => {
                  handleSetBoard({
                    subTasks: [...(column?.subTasks ?? []), ""],
                  });
                }}
                className="w-48 ml-auto block mt-2 border-2 border-[#7F56D9] text-white rounded-lg  bg-[#7F56D9] h-full py-2.5  px-3.5 "
              >
                Add new subtask
              </button>
            </div>

            <div className="input-group mb-3">
              <label className="text-sm pb-[6px] font-medium text-gray-700 block">
                Current status
              </label>

              <select
                type="text"
                onInput={(e) => {}}
                className="w-full border  rounded-lg focus-visible:outline-0 py-2.5  px-3.5 "
                placeholder="Enter subtask name"
              >
                {columns.map((c) => (
                  <option value={c._id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="buttons flex mt-6 gap-4">
              <button
                onClick={(e) => {
                  onHide(false);
                }}
                className="flex-grow  py-2.5 px-5 shadow rounded-lg border  text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateBoard}
                className="flex-grow py-2.5 px-5 shadow rounded-lg border border-[#7F56D9] bg-[#7F56D9] text-white text-base"
              >
                Done
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={(e) => {
            onHide(false);
          }}
          className={`${
            !show ? "invisible" : ""
          } z-10  backdrop-blur-[1px]  absolute h-full bg-black/25 w-full`}
        ></div>
      </div>
    </>
  );
}
