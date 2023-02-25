import { update } from "repositories/boardRepository";
export default async function handler(req, res) {
  res.json(await update({ userToken: req.cookies.Identity, ...req.body }));
}
