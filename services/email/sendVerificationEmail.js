import sendEmail from "external/nodemailer";
import jwt from "jsonwebtoken";
import saveUserToken from "repositories/userTokensRepository";

export default async function sendVerificationEmail(to, userId) {
  try {
    const token = jwt.sign({ userId, uniqeSalt: Date.now() }, process.env.JWT_SECRET);
    //todo refactor here
    await saveUserToken(userId, token);

    const style_string =
      "text-decoration: none; margin-block: 40px; display: inline-flex; margin-inline: auto; text-align: center; line-height: 40px; font-size: 16px; background-color: #7f56d9; color: #fff; padding: 6px 17px; border-radius: 8px; border: 1px solid #7f56d9; box-shadow: 2px 4px 6px #0002;";
    let emailResponse = await sendEmail(
      to,
      "Login your KANBAN Account",
      `<a style="${style_string}" href="${process.env.DEVELOPMENT_URL}/register/verification?token=${token}">Login your account</a>`
    );

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
