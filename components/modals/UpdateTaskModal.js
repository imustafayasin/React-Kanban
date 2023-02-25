import { XCircleIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { createOrUpdate } from "controller/taskController";
import { useDispatch, useSelector } from "react-redux";
import { showUpdateTaskModal } from "../../store/modalStore";
import { setDoneSubtask } from "../../store/taskStore";
export default function UpdateTaskModal() {
  const [task, setTask] = useState();

  const dispatch = useDispatch();

  const show = useSelector((state) => state.modal.showUpdateTaskModal);

  const activeTask = useSelector((state) => state.task.active);
  const columns = useSelector((state) => state.column.values) ?? [];

  function handleSetTask(val) {
    setTask({ ...task, ...val });
  }

  // async function handleCreateOrUpdateTask() {
  //   await createOrUpdate(task);
  //   hide();
  // }

  useEffect(() => {
    setTask(activeTask);
  }, [activeTask]);

  function doneSubtask(subTaskId) {
    const subTask = task.subTasks.slice().find((t) => t._id == subTaskId);
    console.log(subTask);
    dispatch(setDoneSubtask({ _id: subTaskId, done: !subTask.done }));
  }

  return (
    <>
      {show && (
        <div className="modal  z-20 w-full grid items-center justify-center	 absolute -translate-y-1/2	-translate-x-1/2	 h-full left-1/2 	top-1/2 p-4 ">
          <div className="modal-content z-20	 relative rounded-md p-6  bg-white w-[500px]">
            <div className="head">
              <input
                type="text"
                value={task?.name}
                onInput={(e) => {
                  handleSetTask({ name: e.target.value });
                }}
                className="py-2.5  text-lg font-semibold  border-none rounded-lg border w-full focus-visible:outline-0"
                placeholder="Enter task name"
              />
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
                  className="py-2.5 text-slate-500 text-sm resize-none border-none rounded-lg border w-full focus-visible:outline-0"
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
                          checked={subTask.done}
                          onChange={(e) => doneSubtask(subTask._id)}
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
                  type="text"
                  onChange={(e) => {
                    handleSetTask({
                      columnId: e.target.value,
                    });
                  }}
                  className="w-full border  rounded-lg focus-visible:outline-0 py-2.5  px-3.5 "
                  placeholder="Enter subtask name"
                >
                  {columns?.map((c, i) => (
                    <option key={i} value={c._id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* <div className="buttons flex mt-6 gap-4">
              <button
                onClick={hide}
                className="flex-grow  py-2.5 px-5 shadow rounded-lg border  text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateOrUpdateTask}
                className="flex-grow py-2.5 px-5 shadow rounded-lg border border-[#7F56D9] bg-[#7F56D9] text-white text-base"
              >
                Done
              </button>
            </div> */}
            </div>
          </div>
          <div
            onClick={() => {
              dispatch(showUpdateTaskModal(false));
            }}
            className=" z-10  backdrop-blur-[1px]  absolute h-full bg-black/25 w-full"
          ></div>
        </div>
      )}
    </>
  );
}
