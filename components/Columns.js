import { useDispatch, useSelector } from "react-redux";
import { showUpdateTaskModal } from "../store/modalStore";
import { setActive } from "../store/taskStore";
import { getById } from "../controller/taskController";

export default function Columns() {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.column.values) ?? [];

  async function getTaskDetail(taskId) {
    dispatch(setActive(await getById(taskId)));
    dispatch(showUpdateTaskModal(true));
  }
  return (
    <div className="content h-[100%] bg-gray-100	 px-10 p-8 flex gap-6 overflow-x-auto	">
      {columns.map((column, i) => {
        return (
          <div key={i} className="board shrink-0	 h-full min-w-[330px]">
            <div className="board-header flex items-center mb-4 d-flex gap-2">
              <div className="w-3 h-3 border rounded-full bg-sky-500"></div>
              <h5 className="title text-sm	font-medium">
                {column.name} ({column.tasks.length})
              </h5>
            </div>
            <div className="board-items">
              {column.tasks.map((task, j) => {
                return (
                  <div
                    key={j}
                    onClick={() => getTaskDetail(task._id)}
                    className="board-item bg-white cursor-pointer shadow mb-3 rounded-lg	 py-5 px-4"
                  >
                    <h2 className="mb-2 text-medium font-semibold">{task.name}</h2>
                    <p className="text-xs text-gray-600">0 of 1 subtasks</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
