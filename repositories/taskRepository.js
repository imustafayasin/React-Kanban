import "lib/mongodb";
import Tasks from "../models/taskModel";
import SubTask from "../models/subtaskModel";
import Columns from "../models/columnModel";
import { ObjectId } from "mongodb";

let createOrUpdate = async function ({ _id, name, columnId, subTasks, description }) {
  let column = await Columns.findById(columnId);
  let task = await Tasks.findByIdAndUpdate(
    _id,
    { name, description },
    { upsert: true, new: true }
  );
  column.addTask(task);
  var createdSubTasks = [];
  for (const subTask of subTasks) {
    createdSubTasks.push(
      await SubTask.findByIdAndUpdate(
        { _id: new ObjectId(subTask._id) },
        { name: subTask.name },
        { upsert: true, new: true }
      )
    );
  }
  console.log({ createdSubTasks });
  task.setSubTasks(createdSubTasks);

  return { success: true };
};

let getById = async function ({ taskId }) {
  return await Tasks.findById(taskId).populate("subTasks");
};

export { createOrUpdate, getById };
