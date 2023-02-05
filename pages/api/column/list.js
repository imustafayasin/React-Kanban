import { findAllAsync } from "repositories/columnRepository.js";

export default async function handler(req, res) {
  const columns = await findAllAsync(req.body.boardId);
  res.json(columns);
}
