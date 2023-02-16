import { createOrUpdate } from "repositories/taskRepository";
export default async function handler(req, res) {
  res.json(await createOrUpdate(req.body));
}
