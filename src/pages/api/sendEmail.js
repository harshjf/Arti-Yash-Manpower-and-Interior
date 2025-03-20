import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  try {
    const { email, name, subject, message } = JSON.parse(req.body);

    const SENDER_EMAIL = "aymp.info@aympinterior.com";
    const SENDER_PASSWORD = "aympinterior@123";
    const RECEIVER_EMAIL = "aymp.info@aympinterior.com";

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 587,
      secure: false,
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASSWORD,
      },
    });

    // Create an email message
    const mailOptions = {
      from: SENDER_EMAIL,
      to: RECEIVER_EMAIL,
      subject: subject,
      text: `User Mail: ${email}\nUser Name: ${name}\nSubject: ${subject}\nMessage: ${message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
}
