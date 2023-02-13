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
  let createdBoard = await Boards.create({
    userId: user._id,
    name: board.name,
  });
  console.log({ createdBoard });

  for (const column of board.columns) {
    await Columns.create({ boardId: createdBoard._id, name: column });
  }
};

export { findAllAsync, create };
