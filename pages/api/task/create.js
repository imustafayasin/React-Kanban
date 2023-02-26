import { create } from "repositories/taskRepository";
export default async function handler(req, res) {
  res.json(await create(req.body));
}
