import { deletById } from "repositories/taskRepository";
export default async function handler(req, res) {
  res.json(await deletById(req.body));
}
