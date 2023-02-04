import sendEmail from "external/nodemailer";
import jwt from "jsonwebtoken";

export default async function sendVerificationEmail(to, userId) {
  try {
    const token = jwt.sign(userId.toString(), process.env.JWT_SECRET);
    //todo refactor here
    let emailResponse = await sendEmail(
      to,
      "Kanban APP Register",
      `<a href="${process.env.DEVELOPMENT_URL}/register/verification?token=${token}">Login your account</a>`
    );

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
