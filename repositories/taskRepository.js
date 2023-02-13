import "lib/mongodb";
import Tasks from "../models/taskModel";
import SubTask from "../models/subtaskModel";

let create = async function (taskItem) {
  let createTask = await Tasks.create({
    name: taskItem.name,
    columnId: taskItem.columnId,
  });

  for (const subtask of taskItem.subTasks) {
    await SubTask.create({
      taskId: createTask._id,
      name: subtask.name,
      isDone: false,
    });
  }
  return { success: true };
};

export { create };
