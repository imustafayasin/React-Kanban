import "lib/mongodb";
import Boards from "../models/boardModel";
import Columns from "../models/columnModel";
import Tasks from "../models/taskModel";

import { getUserWithJWT } from "./accountRepository";
let findAllAsync = async function (usertoken) {
  const user = await getUserWithJWT(usertoken);
  return await Boards.find({ userId: user._id });
};

let create = async function (board) {
  const user = await getUserWithJWT(board.userToken);
  let createdBoard = new Boards({ userId: user._id, name: board.name });

  for (const columnObj of board.columns) {
    var column = new Columns({ boardId: createdBoard._id, name: columnObj.name });
    await createdBoard.addColumn(column);
    await column.save();
  }
  await createdBoard.save();
};
let deleteBoard = async function ({ boardId }) {
  await Boards.findByIdAndDelete(boardId);
  let columns = await Columns.find({ boardId });
  for (const column of columns) {
    await Tasks.deleteMany({ columnId: column._id });
  }
};
let getById = async function (boardId) {
  return await Boards.findById(boardId).populate("columns");
};

export { findAllAsync, create, deleteBoard, getById };
