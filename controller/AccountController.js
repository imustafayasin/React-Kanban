import request from "../lib/axios";

const login = async function (email) {
  return await request("/api/account/login", "POST", { email });
};

export { login };
