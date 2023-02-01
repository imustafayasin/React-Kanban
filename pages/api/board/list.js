import GetDatabaseCollection from "@/lib/mongodb";

export default async function handler(req, res) {
  let boards = await GetDatabaseCollection("boards");
  switch (req.method) {
    case "GET":
      const allPosts = await boards.find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}
