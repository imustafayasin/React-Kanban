import request from "../lib/axios";

const create = async function ({ name, subTasks, columnId, description }) {
  return await request("/api/task/create", "POST", {
    name,
    subTasks,
    columnId,
    description,
  });
};

const update = async function ({ _id, name, subTasks, columnId, description }) {
  return await request("/api/task/update", "POST", {
    _id,
    name,
    subTasks,
    columnId,
    description,
  });
};

const getById = async function (taskId) {
  return await request("/api/task/get", "POST", { taskId });
};

export { create, update, getById };
