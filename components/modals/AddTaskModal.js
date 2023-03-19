import { XCircleIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { create } from "controller/taskController";
import { useDispatch, useSelector } from "react-redux";
import { showAddTaskModal } from "../../store/modalStore";

export default function AddTaskModal() {
  const [task, setTask] = useState();
  const dispatch = useDispatch();

  const columns = useSelector((state) => state.column.values);

  function handleSetTask(val) {
    setTask({ ...task, ...val });
  }

  async function handleCreateOrUpdateTask() {
    await create(task);
    dispatch(showAddTaskModal(false));
  }
  useEffect(() => {
    setTask({
      subTasks: [{ name: "" }],
      columnId: columns[0]?._id,
    });
  }, []);

  return (
    <>
      <div className="modal  z-20 w-full grid items-center justify-center	 absolute -translate-y-1/2	-translate-x-1/2	 h-full left-1/2 	top-1/2 p-4 ">
        <div className="modal-content z-20	 relative rounded-md p-6  bg-white w-[500px]">
          <div className="head mb-5">
            <div className="icon border mb-4 w-12 h-12 grid place-items-center rounded-[10px] shadow">
              <ClipboardDocumentListIcon className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold ">Create new task</h2>
          </div>
          <div className="modal-content">
            <div className="input-group pb-3">
              <label className="text-sm pb-[6px] font-medium text-gray-700 block">
                Title
              </label>
              <input
                type="text"
                value={task?.name}
                onInput={(e) => {
                  handleSetTask({ name: e.target.value });
                }}
                className="py-2.5  px-3.5 rounded-lg border w-full focus-visible:outline-0"
                placeholder="Enter task name"
              />
            </div>
            <div className="input-group pb-3">
              <label className="text-sm pb-[6px] font-medium text-gray-700 block">
                Description
              </label>
              <textarea
                type="text"
                value={task?.description}
                onInput={(e) => {
                  handleSetTask({ description: e.target.value });
                }}
                rows="2"
                className="py-2.5  px-3.5 rounded-lg border w-full focus-visible:outline-0"
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
                    <div key={i} className="flex items-center gap-2 mb-2">
                      <input
                        type="text"
                        value={subTask?.name}
                        onInput={(e) => {
                          let tasksObj = task.subTasks;
                          tasksObj[i] = { ...tasksObj[i], name: e.target.value };
                          handleSetTask({
                            subTasks: tasksObj,
                          });
                        }}
                        className="w-full border  rounded-lg focus-visible:outline-0 py-2.5  px-3.5 "
                        placeholder="Enter subtask name"
                      />
                      {task.subTasks.length > 1 && (
                        <XCircleIcon
                          onClick={() => {
                            handleSetTask({
                              subTasks: task?.subTasks?.filter((b, ind) => i != ind),
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
                  handleSetTask({
                    subTasks: [...task?.subTasks, { name: task.subTask }],
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

            <div className="buttons flex mt-6 gap-4">
              <button
                onClick={() => dispatch(showAddTaskModal(false))}
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
            </div>
          </div>
        </div>
        <div
          onClick={() => dispatch(showAddTaskModal(false))}
          className=" z-10  backdrop-blur-[1px]  absolute h-full bg-black/25 w-full"
        ></div>
      </div>
    </>
  );
}
