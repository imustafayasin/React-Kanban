import "lib/mongodb";
import Tasks from "../models/taskModel";
import SubTask from "../models/subtaskModel";
import Columns from "../models/columnModel";

let create = async function ({ name, columnId }) {
  let column = await Columns.findById(columnId);
  let task = await Tasks.findOneAndUpdate(
    { name },
    { name },
    {
      upsert: true,
      new: true,
    }
  );

  column.addTask(task);

  // for (const subtask of taskItem.subTasks) {
  //   await SubTask.create({
  //     taskId: createTask._id,
  //     name: subtask.name,
  //     isDone: false,
  //   });
  // }
  return { success: true };
};

export { create };
