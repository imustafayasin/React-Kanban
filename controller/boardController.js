import request from "../lib/axios";

const create = async function ({ name, columns }) {
  return await request("/api/board/create", "POST", { name, columns });
};
const findAll = async function () {
  return await request("/api/board/list", "GET");
};

export { create, findAll };
