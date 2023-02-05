import GetDatabaseCollection from "lib/mongodb";
import { getUserWithJWT } from "./accountRepository";
let findAllAsync = async function (usertoken) {
  const boardsCollection = await GetDatabaseCollection("boards");
  const user = await getUserWithJWT(usertoken);
  const boards = await boardsCollection.find({ userId: user._id }).toArray();
  return boards;
};

let create = async function (board) {
  const boardsCollection = await GetDatabaseCollection("boards");
  const user = await getUserWithJWT(board.userToken);
  let createdBoard = await boardsCollection.insertOne({
    userId: user._id,
    name: board.name,
  });

  const columnsCollection = await GetDatabaseCollection("columns");
  for (const column of board.columns) {
    await columnsCollection.insertOne({ boardId: createdBoard.insertedId, name: column });
  }
};

export { findAllAsync, create };
