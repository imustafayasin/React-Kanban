import GetDatabaseCollection from "lib/mongodb";

let findAllAsync = async function () {
  const boardsCollection = await GetDatabaseCollection("boards");
  const boards = await boardsCollection.find({}).toArray();
  return boards;
};

export { findAllAsync };
