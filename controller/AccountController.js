import request from "../lib/axios";

const login = async function (email) {
  return await request("/api/account/register", "POST", { email });
};

export { login };
