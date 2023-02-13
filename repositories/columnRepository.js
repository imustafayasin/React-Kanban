import "lib/mongodb";
import { ObjectId } from "mongodb";
import Columns from "../models/columnModel";

let findAllAsync = async function (boardId) {
  return await Columns.find({ boardId: new ObjectId(boardId) });
};
export { findAllAsync };
