import GetDatabaseCollection from "lib/mongodb";
let findAllAsync = async function (boardId) {
  const ObjectId = (await import("mongodb")).ObjectId;
  const columnsCollection = await GetDatabaseCollection("columns");
  const columns = await columnsCollection
    .find({ boardId: new ObjectId(boardId) })
    .toArray();
  return columns;
};
export { findAllAsync };
