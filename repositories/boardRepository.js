import "lib/mongodb";
import Boards from "../models/boardModel";
import Columns from "../models/columnModel";

import { getUserWithJWT } from "./accountRepository";
let findAllAsync = async function (usertoken) {
  const user = await getUserWithJWT(usertoken);
  return await Boards.find({ userId: user._id });
};

let create = async function (board) {
  const user = await getUserWithJWT(board.userToken);
  let createdBoard = await new Boards({
    userId: user._id,
    name: board.name,
  });
  createdBoard.save();

  for (const column of board.columns) {
    let columnClass = await new Columns({ boardId: createdBoard._id, name: column });
    columnClass.save();
  }
};

export { findAllAsync, create };
