import { verification } from "repositories/accountRepository";
import { serialize } from "cookie";
export default async function handler(req, res) {
  try {
    const { success } = await verification(req.body.token);
    if (success === true) {
      res.setHeader(
        "Set-Cookie",
        serialize("Identity", String(req.body.token), { httpOnly: true, path: "/" })
      );
    }
    res.send({ success });
  } catch (error) {}
}
