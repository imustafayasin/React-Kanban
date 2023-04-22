import "lib/mongodb";
import Boards from "../models/boardModel";
import Columns from "../models/columnModel";
import Tasks from "../models/taskModel";

import { getUserWithJWT } from "./accountRepository";

const findAllAsync = async function (usertoken) {
  const user = await getUserWithJWT(usertoken);
  return await Boards.find({ userId: user._id });
};

let create = async function (board) {
  const user = await getUserWithJWT(board.userToken);
  const createdBoard = new Boards({ userId: user._id, name: board.name });

  if (!!board.columns && board.columns.length > 0) {
    for (const columnObj of board.columns) {
      var column = new Columns({ boardId: createdBoard._id, name: columnObj.name });
      await createdBoard.addColumn(column);
      await column.save();
    }
  }
  await createdBoard.save();
  return createdBoard;
};

const update = async function (request) {
  //TODO: check user

  const board = await Boards.findById(request._id);

  board.update(request.name);

  const removed_columns = board.columns.filter(
    (bc) => !request.columns.some((rc) => rc._id == bc)
  );

  const added_columns = request.columns.filter(
    (rc) => !board.columns.some((bc) => bc == rc._id)
  );

  for (const column of removed_columns) {
    await board.removeColumn(column);
    await Columns.findByIdAndRemove(column);
  }

  for (const columnObj of added_columns) {
    var column = new Columns({ boardId: board._id, name: columnObj.name });
    await board.addColumn(column);
    await column.save();
  }

  return board;
};

const deleteBoard = async function ({ boardId }) {
  await Boards.findByIdAndDelete(boardId);
  const columns = await Columns.find({ boardId });
  for (const column of columns) {
    await Tasks.deleteMany({ columnId: column._id });
  }
};

const getById = async function (boardId) {
  return await Boards.findById(boardId).populate("columns");
};

export { findAllAsync, create, deleteBoard, getById, update };
