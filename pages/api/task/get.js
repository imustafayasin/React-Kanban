import { getById } from "repositories/taskRepository";
export default async function handler(req, res) {
  res.json(await getById(req.body));
}
