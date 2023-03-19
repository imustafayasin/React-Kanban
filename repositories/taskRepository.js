import "lib/mongodb";
import Tasks from "../models/taskModel";
import SubTask from "../models/subtaskModel";
import Columns from "../models/columnModel";
import { ObjectId } from "mongodb";

let create = async function ({ name, columnId, subTasks, description }) {
  let column = await Columns.findById(columnId);

  let task = await Tasks.create({ columnId: new ObjectId(columnId), name, description });

  column.addTask(task);

  const createdSubTasksList = [];
  for (const subTask of subTasks) {
    if (!subTask.name) continue;
    createdSubTasksList.push(
      await SubTask.create({ taskId: task._id, name: subTask.name, columnId: column._id })
    );
  }

  task.setSubTasks(createdSubTasksList);
  return { success: true };
};

let update = async function ({ _id, name, columnId, subTasks, description }) {
  let task = await Tasks.findByIdAndUpdate(_id, { name, description }, { new: true });

  if (task.columnId.toString() != columnId) {
    const oldColumn = await Columns.findById(task.columnId);
    await oldColumn.removeTask(task);
    const newColumn = await Columns.findById(columnId);
    await newColumn.addTask(task);
    await task.updateColumn(newColumn._id);
  }

  const removed_subtask = task.subTasks.filter(
    (st) => !subTasks.some((rst) => rst._id == st)
  );

  for (const subTask of removed_subtask) {
    task.removeSubtask(subTask);
  }

  const added_subtask = subTasks.filter(
    (rst) => !task.subTasks.some((st) => st == rst._id)
  );

  for (const subTask of added_subtask) {
    var craetedSubTask = new SubTask(task._id, subTask.name, columnId);
    task.addSubTask(craetedSubTask);
  }

  //update current Subtask
  for (const subTask of subTasks) {
    if (!subTask._id || !subTask.name) return;
    await SubTask.findOneAndUpdate(
      { _id: new ObjectId(subTask._id) },
      { name: subTask.name, done: subTask?.done }
    );
  }

  return { success: true };
};

let getById = async function ({ taskId }) {
  return await Tasks.findById(taskId).populate("subTasks");
};
let deletById = async function ({ taskId }) {
  await Tasks.findByIdAndDelete(taskId);
  await SubTask.deleteMany({ taskId: new ObjectId(taskId) });
  return { success: true };
};

export { create, getById, update, deletById };
