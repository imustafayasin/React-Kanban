import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: process.env.EXAMPLE_RECEIVER_EMAIL,
  from: process.env.FROM_EMAIL, // Use the email address or domain you verified above
  subject: "test",
  text: "test",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

export default async function sendEmail(to, subject, html) {
  try {
    let emailResponse = await sgMail.send(msg);
    console.log({ emailResponse }, msg);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
