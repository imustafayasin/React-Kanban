import request from "../lib/axios";

const create = async function ({ name, subTasks, columnId, description }) {
  return await request("/api/task/create", "POST", {
    name,
    subTasks,
    columnId,
    description,
  });
};

export { create };
