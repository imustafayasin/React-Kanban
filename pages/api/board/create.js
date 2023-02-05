import { create } from "repositories/boardRepository";
export default async function handler(req, res) {
  await create({ userToken: req.cookies.Identity, ...req.body });
  res.json();
}
