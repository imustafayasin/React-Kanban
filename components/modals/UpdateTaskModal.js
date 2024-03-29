import {
  XCircleIcon,
  ClipboardDocumentListIcon,
  PencilSquareIcon,
  TrashIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import {
  update as updateTask,
  deleteById as deleteTask,
} from "controller/taskController";
import { useDispatch, useSelector } from "react-redux";
import { showUpdateTaskModal } from "../../store/modalStore";
import { setDoneSubtask, update } from "../../store/taskStore";
import {
  updateTaskColumn,
  deleteTask as deleteTaskFromStore,
} from "../../store/columnStore";
export default function UpdateTaskModal() {
  const dispatch = useDispatch();

  const task = useSelector((state) => state.task.active);
  const columns = useSelector((state) => state.column.values) ?? [];
  const [showUpdateMode, setUpdateMod] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const updateDropdownMenuRef = useRef();

  function clickOutSide(e) {
    !e.composedPath().includes(updateDropdownMenuRef.current) && setShowDropdown(false);
  }
  useEffect(() => {
    document.addEventListener("click", clickOutSide);
    return () => {
      document.removeEventListener("click", clickOutSide);
    };
  }, [showDropdown]);

  async function handleSetTask(val) {
    dispatch(update(val));
    dispatch(
      updateTaskColumn({
        oldColumnId: task.columnId,
        newColumnId: val.columnId ?? task.columnId,
        task: task,
      })
    );
  }
  async function handleUpdateTask() {
    await updateTask(task);

    dispatch(showUpdateTaskModal(false));
  }

  function doneSubtask(subTaskId) {
    const subTask = task.subTasks.find((t) => t._id == subTaskId);
    dispatch(
      setDoneSubtask({
        _id: subTaskId,
        name: task.name,
        description: task.description,
        columnId: task.columnId,
        done: !subTask.done,
      })
    );
  }

  return (
    <>
      <div className="modal  z-20 w-full grid items-center justify-center	 absolute -translate-y-1/2	-translate-x-1/2	 h-full left-1/2 	top-1/2 p-4 ">
        <div className="modal-content z-20	 relative rounded-md p-6  bg-white w-[500px]">
          <div className="head flex items-center">
            <input
              type="text"
              value={task?.name}
              onInput={(e) => {
                handleSetTask({ name: e.target.value });
              }}
              className="py-2.5  bg-white text-lg font-semibold  border-none rounded-lg border w-full focus-visible:outline-0"
              placeholder="Enter task name"
            />
            <EllipsisVerticalIcon
              onClick={() => setShowDropdown(true)}
              className="w-8 h-8 cursor-pointer"
            />
            {showDropdown && (
              <div
                ref={updateDropdownMenuRef}
                className="dropdown-inner shadow pt-2 z-50  w-40 bg-white absolute rounded  right-9"
              >
                <button
                  onClick={() => {
                    setUpdateMod(true);
                  }}
                  className=" mb-2 py-1 px-4  flex items-center hover:bg-slate-200 w-full text-left"
                >
                  <PencilSquareIcon className="w-5 h-5 mr-2 text-gray-800" />
                  Update
                </button>
                <button
                  onClick={() => {
                    deleteTask(task._id);
                    dispatch(
                      deleteTaskFromStore({
                        column_id: task.columnId,
                        task_id: task._id,
                      })
                    );
                    dispatch(showUpdateTaskModal(false));
                  }}
                  className=" mb-2 py-1 px-4  flex items-center hover:bg-slate-200 w-full text-left"
                >
                  <TrashIcon className="w-5 h-6 mr-2 text-gray-800" />
                  Delete
                </button>
              </div>
            )}
          </div>
          <div className="modal-content">
            <div className="input-group pb-3">
              <textarea
                type="text"
                value={task?.description}
                onInput={(e) => {
                  handleSetTask({ description: e.target.value });
                }}
                rows="2"
                className="py-2.5 bg-white text-slate-500 text-sm resize-none border-none rounded-lg border w-full focus-visible:outline-0"
                placeholder="Enter task detail"
              ></textarea>
            </div>
            <div className="input-group mb-3">
              <label className="text-sm pb-[6px] font-medium text-gray-700 block">
                Subtasks
              </label>
              <div className="max-h-40 overflow-y-auto">
                {task?.subTasks?.map((subTask, i) => {
                  return (
                    <label
                      key={i}
                      className="flex items-center select-none cursor-pointer gap-2 mb-2 py-2  px-3 rounded bg-neutral-200"
                    >
                      <input
                        type="checkbox"
                        value={subTask?._id}
                        checked={subTask?.done}
                        onChange={(e) => doneSubtask(subTask?._id)}
                        className="focus-visible:outline-0 border-none w-3.5 h-3.5 peer"
                      />
                      <span className="text-sm peer-checked:line-through">
                        {subTask?.name}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="input-group mb-3">
              <label className="text-sm pb-[6px] font-medium text-gray-700 block">
                Current status
              </label>

              <select
                onChange={(e) => {
                  handleSetTask({
                    columnId: e.target.value,
                  });
                }}
                defaultValue={task.columnId}
                className="w-full border  rounded-lg focus-visible:outline-0 py-2.5  px-3.5 "
                placeholder="Enter subtask name"
                value={task.columnId}
              >
                {columns?.map((c, i) => (
                  <option key={i} value={c?._id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            {showUpdateMode && (
              <div className="buttons flex mt-6 gap-4">
                <button
                  onClick={() => {
                    dispatch(showUpdateTaskModal(false));
                  }}
                  className="flex-grow  py-2.5 px-5 shadow rounded-lg border  text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateTask}
                  className="flex-grow py-2.5 px-5 shadow rounded-lg border border-[#7F56D9] bg-[#7F56D9] text-white text-base"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => {
            dispatch(showUpdateTaskModal(false));
          }}
          className=" z-10  backdrop-blur-[1px]  absolute h-full bg-black/25 w-full"
        ></div>
      </div>
    </>
  );
}
