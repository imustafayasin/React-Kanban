import { findAllAsync } from "repositories/boardRepository.js";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const allPosts = await findAllAsync(req.cookies.Identity);
    res.json({ status: 200, data: allPosts });
  }
}
