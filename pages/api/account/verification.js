import { verification } from "repositories/accountRepository";
export default async function handler(req, res) {
  try {
    res.send(await verification(req.body.token));
  } catch (error) {}
}
