import { register } from "repositories/accountRepository";
import sendVerificationEmail from "services/email/sendVerificationEmail";

export default async function handler(req, res) {
  try {
    const response = await register(req.body.email);

    if (response.success !== false) {
      const { success: verificationEmailSuccess } = await sendVerificationEmail(
        response.user.email,
        response.user.id
      );

      res.send({
        success: verificationEmailSuccess,
        message: verificationEmailSuccess
          ? "Success! We sent login url to your email!"
          : "An error occurred while sending email",
      });
    } else {
      res.send(response);
    }
  } catch (error) {
    res.send(error);
  }
}
