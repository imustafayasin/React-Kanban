import sendEmail from "external/nodemailer";
import jwt from "jsonwebtoken";
import saveUserToken from "repositories/userTokensRepository";

export default async function sendVerificationEmail(to, userId) {
  try {
    const token = jwt.sign({ userId, uniqeSalt: Date.now() }, process.env.JWT_SECRET);
    //todo refactor here
    await saveUserToken(userId, token);

    let emailResponse = await sendEmail(
      to,
      "Login your KANBAN Account",
      `<a href="${process.env.DEVELOPMENT_URL}/register/verification?token=${token}">Login your account</a>`
    );

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
