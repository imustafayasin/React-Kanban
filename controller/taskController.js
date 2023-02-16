import request from "../lib/axios";

const createOrUpdate = async function ({ _id, name, subTasks, columnId, description }) {
  return await request("/api/task/createOrUpdate", "POST", {
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

export { createOrUpdate, getById };
