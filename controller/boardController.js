import request from "../lib/axios";

const create = async function ({ name, columns }) {
  return await request("/api/board/create", "POST", { name, columns });
};
const deleteBoard = async function (boardId) {
  return await request("/api/board/delete", "POST", { boardId });
};
const findAll = async function () {
  return await request("/api/board/list", "GET");
};

export { create, findAll, deleteBoard };
