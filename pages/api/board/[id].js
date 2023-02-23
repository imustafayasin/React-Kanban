import { getById } from "repositories/boardRepository";
export default async function handler(req, res) {
  res.json(await getById(req.query.id));
}
