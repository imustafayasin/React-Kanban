import { findAllAsync } from "repositories/boardRepository.js";
import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const allPosts = await findAllAsync();
    res.json({ status: 200, data: allPosts });
  }
}
