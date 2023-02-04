import nodemailer from "nodemailer";

export default async function sendEmail(to, subject, html) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.NODEMAILER_SENDER_EMAIL,
        pass: process.env.NODEMAILER_SENDER_PASS,
      },
    });
    let mailResult = await transporter.sendMail({
      from: process.env.NODEMAILER_SENDER_EMAIL,
      to: process.env.NODEMAILER_TEST_RECEIVER_EMAIL,
      subject: subject,
      html: html,
    });

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
