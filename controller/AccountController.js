import request from "../lib/axios";

const login = async function (email) {
  return await request("/api/account/register", "POST", { email });
};

const verification = async function (token) {
  return await request("/api/account/verification", "POST", { token });
};

export { login, verification };
