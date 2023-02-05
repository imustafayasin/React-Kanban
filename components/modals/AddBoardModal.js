import { PlusIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { create } from "controller/boardController";

export default function AddBoardModal({ show, onHide, dispatchGet }) {
  const [board, setBoard] = useState({});

  const columnNameInputRef = useRef(null);
  function handleSetBoard(val) {
    setBoard({ ...board, ...val });
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
        } modal  z-20 w-full grid items-center absolute -translate-y-1/2	-translate-x-1/2	 h-full left-1/2 pl-[290px]	top-1/2 p-4 "`}
      >
        <div className="modal-content z-20	 relative rounded-md p-6  bg-white w-[400px]	p-4">
          <div className="head mb-5">
            <div className="icon border mb-4 w-12 h-12 grid place-items-center rounded-[10px] shadow">
              <PlusIcon className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold mb-1">Create a new board</h2>
            <p className="text-sm text-zinc-500">
              Create board and columns. You can change it later.
            </p>
          </div>
          <div className="modal-content">
            <div className="input-group pb-3">
              <label className="text-sm pb-[6px] font-medium text-gray-700 block">
                Board Name
              </label>
              <input
                type="text"
                onInput={(e) => {
                  handleSetBoard({ name: e.target.value });
                }}
                className="py-2.5  px-3.5 rounded-lg border w-full focus-visible:outline-0"
                placeholder="Enter board name"
              />
            </div>
            <div className="input-group mb-3">
              <label className="text-sm pb-[6px] font-medium text-gray-700 block">
                Add columns
              </label>
              <div className="flex ">
                <input
                  type="text"
                  onInput={(e) => {
                    handleSetBoard({ columnName: e.target.value });
                  }}
                  ref={columnNameInputRef}
                  className="w-full border rounded-lg rounded-r-none focus-visible:outline-0 py-2.5  px-3.5 "
                  placeholder="Enter column name"
                />
                <button
                  onClick={() => {
                    handleSetBoard({
                      columns: [...(board?.columns ?? []), board.columnName],
                    });
                    columnNameInputRef.current.value = "";
                  }}
                  className="w-28 rounded-l-none border-2 border-[#7F56D9] text-white rounded-lg  bg-[#7F56D9] h-full py-2.5  px-3.5 "
                >
                  Add
                </button>
              </div>
            </div>
            <div className="column-names flex-wrap	flex gap-1">
              {board?.columns?.map((column, i) => {
                return (
                  <div
                    key={i}
                    className="column-name flex items-center gap-1 rounded-lg inline bg-gray-500 text-white text-sm	py-0.5 px-2	"
                  >
                    <span>{column}</span>
                    <span>
                      <XMarkIcon
                        onClick={() => {
                          handleSetBoard({
                            columns: board?.columns?.filter((b) => b != column),
                          });
                        }}
                        className="w-5 cursor-pointer  h-5"
                      />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="buttons flex mt-6 gap-4">
              <button className="flex-grow flex-grow py-2.5 px-5 shadow rounded-lg border  text-base">
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
