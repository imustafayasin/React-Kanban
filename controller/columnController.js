import request from "../lib/axios";

const findAll = async function (boardId) {
  return await request("/api/column/list", "POST", { boardId });
};

export { findAll };
