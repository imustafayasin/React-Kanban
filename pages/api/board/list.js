import { findAllAsync } from "repositories/boardRepository.js";

export default async function handler(req, res) {
  console.log(findAllAsync);
  if (req.method == "GET") {
    const allPosts = await findAllAsync();
    res.json({ status: 200, data: allPosts });
  }
}
