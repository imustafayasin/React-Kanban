import { register } from "repositories/accountRepository";
import sendEmail from "external/sendgrid";

export default async function handler(req, res) {
  try {
    const response = await register(req.body.email);
    if (response.success) {
      await sendEmail(
        response.user.email,
        "Kanban APP Register",
        '<a href="">Login your account</a>'
      ).then((emailResponse) => {
        console.log(emailResponse);
        if (emailResponse === false) {
          res.send({
            success: false,
            message: "An error occurred while register",
          });
        }
        res.send(response);
      });
    } else {
      res.send(response);
    }
  } catch (error) {
    res.send(error);
  }
}
