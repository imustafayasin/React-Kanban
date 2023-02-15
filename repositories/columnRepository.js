import "lib/mongodb";
import { ObjectId } from "mongodb";
import Columns from "../models/columnModel";
import "../models/taskModel";

let findAllAsync = async function (boardId) {
  return await Columns.find({ boardId: new ObjectId(boardId) }).populate({
    path: "tasks",
    populate: { path: "subTasks" },
  });
};
export { findAllAsync };
