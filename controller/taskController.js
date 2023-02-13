import request from "../lib/axios";

const create = async function ({ name, subTasks, columnId }) {
  return await request("/api/task/create", "POST", {
    name,
    subTasks,
    columnId,
  });
};

export { create };
