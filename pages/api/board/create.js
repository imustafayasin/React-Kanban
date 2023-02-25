import { create } from "repositories/boardRepository";
export default async function handler(req, res) {
  res.json(await create({ userToken: req.cookies.Identity, ...req.body }));
}
