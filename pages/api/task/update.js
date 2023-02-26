import { update } from "repositories/taskRepository";
export default async function handler(req, res) {
  res.json(await update(req.body));
}
