import axios from "axios";

export default async function Request(path, method, data) {
  const response = await axios({
    method: method,
    url: path,
    data: data,
  });
  return response;
}
