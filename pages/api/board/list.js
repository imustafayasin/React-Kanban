import { findAllAsync } from "repositories/boardRepository.js";

export default async function handler(req, res) {
  res.json(await findAllAsync(req.cookies.Identity));
}
