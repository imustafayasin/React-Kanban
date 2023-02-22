import { deleteBoard } from "repositories/boardRepository";
export default async function handler(req, res) {
  res.json(await deleteBoard(req.body));
}
