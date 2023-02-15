import "lib/mongodb";
import Tasks from "../models/taskModel";
import SubTask from "../models/subtaskModel";
import Columns from "../models/columnModel";

let create = async function ({ name, columnId, subTasks, description }) {
  let column = await Columns.findById(columnId);
  let task = await Tasks.create({ name, description });
  column.addTask(task);

  let createdSubTasks = await SubTask.insertMany(
    subTasks.map((st) => ({ name: st.name }))
  );
  createdSubTasks.forEach(async (cst) => await task.addSubTask(cst));

  return { success: true };
};

export { create };
